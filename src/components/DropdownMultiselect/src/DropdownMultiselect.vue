<template>
  <div class="sparc-design-system-component-dropdown-multiselect">
    <dropdown-label
      :disabled="!enabled"
      :label="category.label"
      :tooltip="tooltip"
      :collapse-by-default="collapseByDefault"
      :show-collapsible-arrow="!hasSingleNode"
    >
      <hr v-show="!hasSingleNode" />
      <div v-show="!hasSingleNode" class="show-all-node mx-24 my-8">
        <el-checkbox v-model="showAll" @change="onChangeShowAll">
          <span>Show all</span>
        </el-checkbox>
        <hr />
      </div>
      <div
        :class="[
          'pb-8',
          {
            'light-gray-background': !hasSingleNode,
            'white-background': hasSingleNode
          }
        ]"
      >
        <el-form class="scroll">
          <el-scrollbar wrap-style="max-height: 17.5rem;">
            <el-tree
              ref="tree"
              :class="{ 'white-background': hasSingleNode }"
              :data="category.data"
              node-key="id"
              show-checkbox
              check-on-click-node
              :default-expand-all="false"
              :default-checked-keys="defaultCheckedKeys"
              :expand-on-click-node="false"
              :filter-node-method="filterNodes"
              :props="treeProps"
              :render-content="renderContent"
              @check-change="onCheckChange"
            />
          </el-scrollbar>
        </el-form>
        <div 
          v-if="showExpandOptionsContainer && !optionsExpanded" 
          v-on:click="setOptionsExpanded(true)" 
          class="expand-options-container"
        >
          +Show more
        </div>
        <div 
          v-if="showExpandOptionsContainer && optionsExpanded" 
          v-on:click="setOptionsExpanded(false)" 
          class="expand-options-container"
        >
          -Show less
        </div>
      </div>
    </dropdown-label>
  </div>
</template>

<script>
import { pluck, propOr } from 'ramda'
import DropdownLabel from './DropdownLabel.vue'

const tooltipDelay = 800

export default {
  name: 'DropdownMultiselect',

  components: { DropdownLabel },

  props: {
    category: {
      type: Object,
      default: () => {}
    },
    visibleData: {
      type: Object,
      default: () => {}
    },
    tooltip: {
      type: String,
      default: ''
    },
    enabled: {
      type: Boolean,
      default: true
    },
    collapseByDefault: {
      type: Boolean,
      default: false
    },
    defaultCheckedIds: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      showAll: true,
      treeProps: {
        label: 'label'
      },
      optionsExpanded: false,
      numOptionsShown: 0,
    }
  },
  computed: {
    allVisibleDataIds: function() {
      return Object.keys(propOr({}, this.category.id, this.visibleData))
    },
    visibleCheckedNodes: function() {
      const allCheckedNodes = this.$refs.tree.getCheckedNodes()
      if (this.visibleData === undefined) {
        return allCheckedNodes
      }
      else {
        return allCheckedNodes.filter(checkedNode => {
          return this.allVisibleDataIds.includes(checkedNode.label)
        })
      }
    },
    notVisibleCheckedNodes: function() {
      const allCheckedNodes = this.$refs.tree.getCheckedNodes()
      if (this.visibleData === undefined) {
        return {}
      }
      else {
        return allCheckedNodes.filter(checkedNode => {
          return !this.allVisibleDataIds.includes(checkedNode.label)
        })
      }
    },
    defaultCheckedKeys: function() {
      return this.defaultCheckedIds
    },
    totalVisibleNodes: function() {
      let num = 0
      this.category.data.forEach(node => {
        if (this.visibleData === undefined) {
          if (node.children !== undefined) {
            node.children.forEach(() => {
              num += 1
            })
          }
          num += 1
        }
        else {
          if (this.allVisibleDataIds.includes(node.label)) {
            if (node.children !== undefined) {
              node.children.forEach(() => {
                num += 1
              })
            }
            num += 1
          }
        }
      })
      return num
    },
    numFirstLevelNodes: function() {
      if (this.visibleData === undefined) {
        return this.category.data.length
      }
      else {
        return this.allVisibleDataIds.length
      }
    },
    hasSingleNode: function() {
      return this.numFirstLevelNodes === 1
    },
    showExpandOptionsContainer: function() {
      return this.numFirstLevelNodes > 9
    },
  },
  watch: {
    optionsExpanded: function() {
      this.$refs.tree.filter()
    },
    allVisibleDataIds() {
      this.$refs.tree.filter()
    },
    'visibleData': function() {
      this.setShowAll();
    }
  },
  mounted() {
    if (this.defaultCheckedKeys.length) {
      this.$nextTick(() => {
        this.onCheckChange()
      })
    }
    if (this.showExpandOptionsContainer || this.visibleData !== undefined) {
      this.$refs.tree.filter()
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    renderContent(h, { node, data, store }) {
      return (
        <el-tooltip
          placement="right"
          transition="none"
          open-delay={tooltipDelay}
        >
          <div slot="content" class="capitalize">
            {node.label}
          </div>
          <span class="custom-tree-node">
            <span class="capitalize">{node.label}</span>
          </span>
        </el-tooltip>
      )
    },
    // eslint-disable-next-line no-unused-vars
    filterNodes: function(data, node) {
      if (this.visibleData === undefined) {
        if (this.optionsExpanded) return true;
        if (this.numOptionsShown < 5) {
          this.numOptionsShown += 1
          return true
        }
        return false
      }
      else {
        if (this.showExpandOptionsContainer) {
          if (this.optionsExpanded) {
            return this.allVisibleDataIds.includes(node.label)
          }
          else {
            if (this.allVisibleDataIds.includes(node.label) && this.numOptionsShown < 5)
            {
              this.numOptionsShown += 1
              return true
            }
            return false
          }
        }
        return this.allVisibleDataIds.includes(node.label)
      }
    },
    onChangeShowAll: function(value) {
      if (value) {
        this.uncheckAll()
      } else {
        this.showAll = true
      }
    },
    onCheckChange: function() {
      this.setShowAll()
      this.$emit('selection-change', {
        id: this.category.id,
        checkedNodes: this.$refs.tree.getCheckedNodes(true)
      })
    },
    getSelectedNodes: function() {
      return this.$refs.tree.getCheckedNodes()
    },
    uncheckAll: function() {
      if (this.visibleData === undefined)
      {
        this.$refs.tree.setCheckedKeys([])
        return
      }

      this.$refs.tree.setCheckedKeys(pluck('id', this.notVisibleCheckedNodes))
    },
    uncheck: function(id) {
      this.$refs.tree.setChecked(id, false, true)
    },
    setOptionsExpanded(isExpanded) {
      this.optionsExpanded = isExpanded
      this.numOptionsShown = 0;
    },
    setShowAll: function() {
      const checkedNodes = this.visibleCheckedNodes
      if ((!checkedNodes.length || checkedNodes.length === this.totalVisibleNodes) && !this.hasSingleNode) {
        this.showAll = true
        this.$nextTick(() => { 
          this.uncheckAll() 
        })
      } else {
        this.showAll = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';
.sparc-design-system-component-dropdown-multiselect {
  background-color: white;
  border: 1px solid #dbdfe6;
  border-top: none;
}

::v-deep .show-all-node {
  .el-checkbox__label {
    font-weight: normal;
  }
}
::v-deep .el-tree-node.is-checked {
  .custom-tree-node {
    color: $purple;
  }
}
::v-deep .custom-tree-node {
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: .875rem;
  font-weight: normal;
  flex-grow: 1;
  .capitalize {
    text-transform: capitalize;
  }
}
.light-gray-background .el-tree {
  background: rgb(250, 251, 252);
}
.el-tree-node__expand-icon.el-icon-caret-right {
  order: 1;
  text-align: right;
}
.el-tree-node__content {
  margin-left: 1.5rem !important;
  margin-right: 1rem !important;
  .el-checkbox__input.is-focus:not(.is-checked) {
    .el-checkbox__inner {
      border-color: $lineColor1;
    }
  }
}
.show-all-node {
  color: $purple;
  font-size: .875rem;
  font-weight: normal;
  .el-checkbox {
    padding-right: 0.25rem;
  }
  hr {
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
}
.white-background {
  background: white;
}
.expand-options-container {
  color: $purple;
  font-size: 16px;
  font-weight: 500;
  margin: 0.25rem 1.5rem;
  cursor: pointer;
}
.scroll {
  overflow: hidden;
  max-height: 17.5rem;
}
</style>
