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
          + Expand
        </div>
        <div 
          v-if="showExpandOptionsContainer && optionsExpanded" 
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
      console.log("TOTAL VISIBLE LEAF NODES = ", num)
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
    allVisibleDataIds(val) {
      this.numOptionsShown = 0;
      this.$refs.tree.filter(val)
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
      return this.visibleData === undefined ? true : this.allVisibleDataIds.some(id => id.includes(node.label))
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
        checkedNodes: this.$refs.tree.getCheckedNodes(false, false)
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
      this.numOptionsShown = 0;
      this.optionsExpanded = isExpanded
      this.$refs.tree.filter()
    },
    updateParentFacetsSelectedStatus() {
      const halfCheckedNodes = this.$refs.tree.getHalfCheckedNodes()
      // set the half checked nodes checked status based upon what facets are actually visible since navigating between tabs might 
      // cause some to be hidden so the parent facet should now possibly be checked/unchecked instead of half checked
      halfCheckedNodes.forEach(halfCheckedNode => {
        if (this.visibleCheckedNodes.every(visibleNode => !halfCheckedNode.children.some(child => visibleNode.label == child.label))) {
          this.$refs.tree.setChecked(halfCheckedNode.id, false)
        }
        else if (this.visibleCheckedNodes.every(visibleNode => halfCheckedNode.children.some(child => visibleNode.label == child.label))) {
          this.$refs.tree.setChecked(halfCheckedNode.id, true)
        }
      })
      // set any subfacets again so that their parent facets get updated to checked/half checked in case their parent selection was cleared
      // by the previous tab navigation (i.e. show all was set automatically all the visible facets aviable in the new tab were selected)
      this.visibleCheckedNodes.filter(node => node.label.includes('.')).forEach(subfacet => {
        this.$refs.tree.setChecked(subfacet.id, true, true)
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
