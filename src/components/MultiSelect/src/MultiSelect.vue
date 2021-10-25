<template>
  <el-cascader
    v-model="selectedArray"
    placeholder
    collapse-tags
    @change="onSelectionChange"
    :options="options"
    popper-class="multilevel-select"
    :props="props"
    ref="cascader"
  >
    <template slot-scope="{ node, data }">
      <span>{{ data.label }}</span>
      <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
    </template>
  </el-cascader>
</template>

<script>
export default {
  name: 'MultiSelect',

  props: {
    options: {
      type: Array,
      default: () => []
    },
    defaultSelectedArray: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isMultilevel: function() {
      let multilevel = false;
      this.options.forEach(option => {
          if (option.children !== undefined && option.children.length > 0) {
            multilevel = true;
          }
      });
      return multilevel
    },
    isFilterApplied: function() {
      if (this.isMultilevel) {
        // if the value of a selected node is not the value of one of the options then we know 'show all' node is not selected and the results are filtered
        let isFiltered = false;
        this.selectedArray.forEach(node => {
          if (this.options.filter(option => option.value === node.value).length === 0) {
            isFiltered = true;
          }
        })
        return isFiltered
      }
      else {
        // if it is multilevel than all show all nodes will have the same value as their parent
        let isFiltered = false;
        this.selectedArray.forEach(node => {
          if (node.value[0] !== node.value[1]) {
            isFiltered = true;
          }
        })
        return isFiltered
      }
    }
  },
  watch: {
    options : {
      immediate: true,
      handler() {
        if (!this.isMultilevel) {
          this.addShowAllNode({
            value: 'showAll'
          }, false);
        }
        this.options.forEach(option => {
          if (option.children === undefined || option.children.length === 0) {
            return;
          }
          this.addShowAllNode(option, true)
        })
      }
    },
    selectedArray : {
      immediate: true,
      deep: true,
      handler() {
        console.log("SELECTED ARRAY = ", this.selectedArray)
      }
    }
  },
  data: function() {
    return {
      props: { multiple: true },
      selectedArray: this.defaultSelectedArray,
      previouslyCheckedShowAllNodes: [],
      previouslySelectedArray: this.defaultSelectedArray,
    }
  },
  mounted: function() {
    this.previouslySelectedArray = [...this.selectedArray]
  },
  methods:{
    addShowAllNode(option, isMultilevel) {
      const showAllNode = {
        value: option.value,
        label: 'Show All',
      }
      if (!isMultilevel) {
        if (this.options.filter(option => option.value === showAllNode.value).length > 0) {
          return;
        }
        this.options.unshift(showAllNode)
        this.checkShowAllNode(showAllNode, false)
      }
      else {
        if (option.children.filter(child => child.value === showAllNode.value).length > 0) {
          return;
        }
        option.children.unshift(showAllNode)
        this.checkShowAllNode(showAllNode, true)
      }
    },
    uncheckShowAllNode(showAllNode, isMultilevel) {
      if (!isMultilevel) {
        this.selectedArray = this.selectedArray.filter(selectedComponent => selectedComponent[0] !== showAllNode.value)
        this.previouslyCheckedShowAllNodes = []
      } else {
        this.selectedArray = this.selectedArray.filter(item => {
          return (item[1] !== showAllNode.value)
        })
        this.previouslyCheckedShowAllNodes = this.previouslyCheckedShowAllNodes.filter(node => {
          return (node[0] !== showAllNode.value && node[1] !== showAllNode.value)
        })
      }
    },
    checkShowAllNode(showAllNode, isMultilevel) {
      if (!isMultilevel) {
        this.selectedArray = [[showAllNode.value]]
        this.previouslyCheckedShowAllNodes = [...this.selectedArray]
      } else {
        // remove all nodes selected in the category that 'show all' is being checked

        // let indicies = [];
        // this.selectedArray.forEach((item, index) => {
        //   if (item[0] === showAllNode.value) {
        //     indicies.push(index)
        //   }
        // })
        // indicies.forEach(index => {
        //   this.selectedArray.splice(index, 1)
        // })
        // this.$nextTick(() => {
        //   this.selectedArray.push([showAllNode.value, showAllNode.value])
        // })

        let newSelectedArray = this.selectedArray.filter(item => item[0] !== showAllNode.value)
        newSelectedArray.push([showAllNode.value, showAllNode.value])
        this.selectedArray = newSelectedArray
        if (this.previouslyCheckedShowAllNodes.filter(item => {
          return (item[0] == showAllNode.value && item[1] == showAllNode.value)
        }).length === 0) {
          this.previouslyCheckedShowAllNodes.push([showAllNode.value, showAllNode.value])
        }
      }
    },
    onSelectionChange(value) {
      const option = this.getOptionSelected()
      this.setShowAllNodeStatus(option)
      this.previouslySelectedArray = [...this.selectedArray]
    },
    setShowAllNodeStatus(option) {
      if (!this.isMultilevel) {
        if (this.selectedArray.length === 0) {
          this.checkShowAllNode({value: 'showAll'}, false)
        }
        else if (this.selectedArray.length > 1 && this.selectedArray.length < this.options.length - 1) {
          if (this.selectedArray.length == 2 && this.selectedArray.filter(item => item[0] === 'showAll').length > 0 && this.previouslyCheckedShowAllNodes.length === 0)
          {
            this.checkShowAllNode({value: 'showAll'}, false)
          } 
          else {
            this.uncheckShowAllNode({value: 'showAll'}, false)
          }
        }
        else if (this.selectedArray.length >= this.options.length - 1) {
          this.checkShowAllNode({value: 'showAll'}, false)
        }
      }
      else {
        const numChildrenSelected = this.numChildrenSelected(option);
        const numChildren = option.children.length
        if (numChildrenSelected === 0) {
          this.checkShowAllNode(option, true)
        }
        else if (numChildrenSelected > 1 && numChildrenSelected < numChildren - 1) {
          if (numChildrenSelected === 2 &&
              this.selectedArray.filter(item => { 
                return (item[0] === option.value && item[1] === option.value)
              }).length > 0 && 
              this.previouslyCheckedShowAllNodes.filter(node => {
                return (node[0] === option.value && node[1] === option.value)
              }).length === 0)
          {
            this.checkShowAllNode(option, true)
          } 
          else {
            this.uncheckShowAllNode(option, true)
          }
        }
        else if (numChildrenSelected > 1 && numChildrenSelected === numChildren - 1) {
          if (this.selectedArray.filter(item => { 
            return (item[0] === option.value && item[1] === option.value)
          }).length > 0 && this.previouslyCheckedShowAllNodes.filter(node => {
            return (node[0] === option.value && node[1] === option.value)
          }).length > 0){
            this.uncheckShowAllNode(option, true)
          }
          else {
            this.checkShowAllNode(option, true)
          }
        }
        else if (numChildrenSelected >= numChildren) {
          this.checkShowAllNode(option, true)
        }
      }
    },
    numChildrenSelected(option) {
      let numSelected = 0;
      if (option.children === undefined) { return -1 }
      option.children.forEach(child => {
        this.selectedArray.forEach(item => {
          if (item[1] === child.value) {
            numSelected++
          }
        })
      })
      return numSelected
    },
    getOptionSelected() {
      // find what option was just selected by finding the difference between selectedArray and previouslySelectedArray
      let optionValue = undefined
      this.selectedArray.forEach(item => {
        if (this.previouslySelectedArray.filter(previousItem => {
          return (previousItem[0] === item[0] && previousItem[1] === item[1])
        }).length === 0) {
          optionValue = item[0]
        }
      })
      // if we did not find it yet then that must mean the item was deselected so selectedArray does not have it and we must now check previouslySelectedArray
      if (optionValue === undefined) {
        this.previouslySelectedArray.forEach(previousItem => {
          if (this.selectedArray.filter(item => {
            return (previousItem[0] === item[0] && previousItem[1] === item[1])
          }).length === 0) {
            optionValue = previousItem[0]
          }
        })
      }
      return this.options.filter(option => option.value === optionValue)[0]
    }
  }
}
</script>

<style lang="scss">
.multilevel-select li[aria-haspopup=true] > .el-checkbox {
  display: none;
}
.multilevel-select li[aria-haspopup=true] > .el-cascader-node__label {
  padding: 0;
}

.multilevel-select .el-cascader-menu:nth-child(2) .el-cascader-node:first-child {
  border-bottom: 1px solid #e4e7ed;
}

.multilevel-select .el-cascader-menu:nth-child(2) .el-cascader-menu__list {
  padding: 6px;
}
</style>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';

.cascader >>> .el-cascader-menu:nth-child(2) .el-cascader-node:first-child {
  border-bottom: 1px solid #e4e7ed;
}
.el-cascader-node__label {
  padding: 0;
}
</style>