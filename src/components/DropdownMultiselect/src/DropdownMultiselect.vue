<template>
  <div class="sparc-design-system-component-dropdown-multiselect">
    <dropdown-label
      :disabled="!enabled"
      :label="category.label"
      :tooltip="tooltip"
      :show-collapsible-arrow="!hasSingleNode"
    >
      <hr v-show="!hasSingleNode" />
      <div v-show="!hideShowAllOption" class="show-all-node">
        <el-checkbox v-model="showAll" @change="onChangeShowAll">
          Show all
        </el-checkbox>
        <hr />
      </div>
      <div
        :class="[
          'padding-bottom',
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
              :default-checked-keys="defaultCheckedIds"
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
import { pluck } from 'ramda'
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
    tooltip: {
      type: String,
      default: ''
    },
    enabled: {
      type: Boolean,
      default: true
    },
    defaultCheckedIds: {
      type: Array,
      default: () => []
    }
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
    totalNumNodes: function() {
      let num = 0
      this.category.data.forEach(node => {
        if (node.children !== undefined) {
          node.children.forEach(() => {
            num += 1
          })
        }
        num += 1
      })
      return num
    },
    numFirstLevelNodes: function() {
      return this.category.data.length
    },
    hasSingleNode: function() {
      return this.numFirstLevelNodes === 1
    },
    hideShowAllOption: function() {
      return this.numFirstLevelNodes < 5
    },
    showExpandOptionsContainer: function() {
      return this.numFirstLevelNodes > 9
    },
  },
  watch: {
    optionsExpanded: function(expanded) {
      if (!this.showExpandOptionsContainer) {
        expanded = true;
      }
      this.$refs.tree.filter(expanded)
    },
  },
  mounted() {
    // if we are not rendering the show all node then we manually select all of them by default
    if(this.hideShowAllOption && !this.defaultCheckedIds.length) {
      this.defaultCheckedIds = pluck('id', this.category.data)
    }
    if (this.defaultCheckedIds.length) {
      this.$nextTick(() => {
        this.onCheckChange()
      })
    }
    if (this.showExpandOptionsContainer) {
      this.$refs.tree.filter(this.optionsExpanded)
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    renderContent(h, { node, data, store }) {
      return (
        <el-tooltip
          placement="top-end"
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
    filterNodes: function(expanded, data, node) {
      if (expanded) return true;
      if (this.numOptionsShown < 5) {
        this.numOptionsShown += 1
        return true
      }
      return false
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
      this.$refs.tree.setCheckedKeys([])
    },
    uncheck: function(id) {
      this.$refs.tree.setChecked(id, false, true)
    },
    setOptionsExpanded(isExpanded) {
      this.optionsExpanded = isExpanded
      this.numOptionsShown = 0;
    },
    setShowAll: function() {
      const checkedNodes = this.$refs.tree.getCheckedNodes()
      if ((!checkedNodes.length || checkedNodes.length === this.totalNumNodes) && !this.hideShowAllOption) {
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

<style lang="scss">
@import '../../../assets/_variables.scss';

.sparc-design-system-component-dropdown-multiselect {
  .capitalize {
    text-transform: capitalize;
  }
  .custom-tree-node {
    text-overflow: ellipsis;
    overflow: hidden;
    flex-grow: 1;
  }
  .light-gray-background .el-tree {
    background: rgb(250, 251, 252);
  }
  .show-all-node .el-checkbox__label {
    font-size: 16px;
    font-weight: normal;
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
}
</style>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';
.show-all-node {
  .el-checkbox {
    padding-right: 0.25rem;
  }
  hr {
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
  margin: 0.5rem 1.5rem;
}

.white-background {
  background: white;
}

.padding-bottom {
  padding-bottom: 0.5rem;
}

.sparc-design-system-component-dropdown-multiselect {
  background-color: white;
  border: 1px solid #dbdfe6;
  border-top: none;
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
