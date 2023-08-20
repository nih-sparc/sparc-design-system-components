<template>
  <div class="sparc-design-system-component-dropdown-multiselect">
    <dropdown-label
      ref="label"
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
        <el-form>
          <el-scrollbar :wrap-class="optionsExpanded || !showExpandOptionsContainer ? 'expand' : 'minimize'">
            <el-tree
              ref="tree"
              :class="{ 'white-background': hasSingleNode }"
              :data="category.data"
              node-key="id"
              show-checkbox
              check-on-click-node
              :default-checked-keys="defaultCheckedKeys"
              :auto-expand-parent="false"
              :expand-on-click-node="false"
              :filter-node-method="filterNodes"
              :props="treeProps"
              :render-content="renderContent"
              @check-change="onCheckChange"
            />
          </el-scrollbar>
        </el-form>
        <div 
          v-show="showExpandOptionsContainer && !optionsExpanded" 
          v-on:click="setOptionsExpanded(true)" 
          class="expand-options-container"
        >
          + Expand
        </div>
        <div 
          v-show="showExpandOptionsContainer && optionsExpanded" 
          v-on:click="setOptionsExpanded(false)" 
          class="expand-options-container"
        >
          - Compress
        </div>
      </div>
    </dropdown-label>
  </div>
</template>

<script>
import { pathOr, pluck, propOr, isEmpty } from 'ramda'
import DropdownLabel from './DropdownLabel.vue'

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
        children: 'children',
        label: 'label'
      },
      optionsExpanded: true,
      numOptionsShown: 0,
    }
  },
  computed: {
    allVisibleDataIds: function() {
      return Object.keys(propOr({}, pathOr('', ['facet', 'facetPropPath'], this.category), this.visibleData)).concat(Object.keys(propOr({}, pathOr('', ['facet', 'facetSubpropPath'], this.category), this.visibleData)))
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
    totalVisibleLeafNodes: function() {
      let num = 0
      this.category.data.forEach(node => {
        if (this.visibleData === undefined) {
          if (node.children !== undefined && !isEmpty(node.children)) {
            node.children.forEach(() => {
              num += 1
            })
          } else {
            num += 1
          }
        }
        else {
          if (this.allVisibleDataIds.includes(node.label)) {
            if (node.children !== undefined && !isEmpty(node.children)) {
              node.children.forEach(child => {
                if (this.allVisibleDataIds.includes(child.label))
                  num += 1
              })
            }
            else {
              num += 1
            }
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
    allVisibleDataIds() {
      this.numOptionsShown = 0;
      this.$refs.tree.filter()
    },
    'visibleData': function() {
      this.setShowAll();
    }
  },
  mounted() {
    if (this.defaultCheckedKeys.length) {
      this.onCheckChange()
    }
    if (this.showExpandOptionsContainer || this.visibleData !== undefined) {
      this.numOptionsShown = 0;
      this.$refs.tree.filter()
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span class="capitalize">{node.label.split('.').pop()}</span>
        </span>
      )
    },
    // eslint-disable-next-line no-unused-vars
    filterNodes: function(data, node) {
      return this.visibleData === undefined ? true : this.allVisibleDataIds.some(id => id == node.label)
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
        id: pathOr('', ['facet', 'id'], this.category),
        checkedNodes: this.$refs.tree.getCheckedNodes(false, false)
      })
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
      this.numOptionsShown = 0;
      this.optionsExpanded = isExpanded
      this.$refs.tree.filter()
    },
    updateParentFacetsSelectedStatus() {
      let visibleCheckedParents = this.visibleCheckedNodes.filter(visibleNode => {
        return !visibleNode.label.includes('.')
      })
      let visibleCheckedChildren = this.visibleCheckedNodes.filter(visibleNode => {
        return visibleNode.label.includes('.')
      })

      // First check for any subfacets that have a parent that is not set
      visibleCheckedChildren.forEach(checkedChild => {
        const parentLabel = checkedChild.label.split('.')[0]
        if (!visibleCheckedParents.some(parent => parent.label == parentLabel)) {
          this.$refs.tree.setChecked(checkedChild.id, true, true)
        }
      })

      const halfCheckedNodes = this.$refs.tree.getHalfCheckedNodes()
      // set the half checked nodes checked status based upon what facets are actually visible since navigating between tabs might 
      // cause some to be hidden so the parent facet should now possibly be checked/unchecked instead of half checked
      halfCheckedNodes.forEach(halfCheckedNode => {
        const visibleChildren = halfCheckedNode.children.filter((child) => {
          return this.allVisibleDataIds.includes(child.label)
        })
        const visibleCheckedChildren = halfCheckedNode.children.filter((child) => {
          return this.visibleCheckedNodes.some(visibleNode => visibleNode.label == child.label)
        })
        if (!this.allVisibleDataIds.includes(halfCheckedNode.label)) {
          return
        }
        if (this.visibleCheckedNodes.every(visibleNode => !halfCheckedNode.children.some(child => visibleNode.label == child.label))) {
          this.$refs.tree.setChecked(halfCheckedNode.id, false)
        }
        // If number of visible checked nodes in halfCheckedNode is equal to number of children that are visible (number of children thast are visible is equal to allVisibleDataIds with halfCheckedNode label as a parent)
        else if (visibleChildren.length == visibleCheckedChildren.length) {
          this.$refs.tree.setChecked(halfCheckedNode.id, true)
        }
      })

      visibleCheckedParents = this.visibleCheckedNodes.filter(visibleNode => {
        return !visibleNode.label.includes('.')
      })
      visibleCheckedChildren = this.visibleCheckedNodes.filter(visibleNode => {
        return visibleNode.label.includes('.')
      })

      visibleCheckedParents.forEach(checkedParent => {
        // If any children are unselected then select one deep so that the parent is half-checked
        const visibleChildren = checkedParent.children.filter(child => this.allVisibleDataIds.includes(child.label))
        if (visibleChildren.some(visibleChild => {
          let isChecked = false
          visibleCheckedChildren.forEach(checkedChild => {
            if (checkedChild.label == visibleChild.label) {
              isChecked = true
              return
            }
          })
          return !isChecked
        })) {
          const alreadyCheckedChild = visibleCheckedChildren.find(child => {
            const childsParentLabel = child.label.split('.')[0]
            return childsParentLabel == checkedParent.label
          })
          if (alreadyCheckedChild != undefined) {
            this.$refs.tree.setChecked(alreadyCheckedChild.id, true, true)
          } else {
            this.$refs.tree.setChecked(checkedParent.id, false)
          }
        }
      })
    },
    setShowAll: function() {
      const checkedLeafNodes = this.visibleCheckedNodes.filter(node => node.children == undefined || isEmpty(node.children))
      if ((!checkedLeafNodes.length || checkedLeafNodes.length >= this.totalVisibleLeafNodes) && !this.hasSingleNode) {
        this.showAll = true
        this.$nextTick(() => { 
          this.uncheckAll()
          this.updateParentFacetsSelectedStatus()
        })
      } else {
        this.showAll = false
        this.updateParentFacetsSelectedStatus()
      }
    },
    setCollapsed: function(isCollapsed) {
      this.$refs.label.setCollapsed(isCollapsed)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';
.sparc-design-system-component-dropdown-multiselect {
  background-color: white;
  border: 1px solid $lineColor2;
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
  background: #FAFBFC;
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
  font-size: 14px;
  font-weight: 500;
  margin: 0.25rem 1.5rem;
  cursor: pointer;
}
::v-deep .expand {
  max-height: none;
  overflow-y: hidden;
}
::v-deep .minimize {
  max-height: 9rem;
}
::v-deep .el-scrollbar__bar.is-vertical {
  opacity: 1;
}
</style>
