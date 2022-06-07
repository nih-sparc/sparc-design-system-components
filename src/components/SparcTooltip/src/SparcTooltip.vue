<template>
  <el-tooltip
    :content="content"
    :disabled="isDisabled"
    :placement="mappedPlacement"
  >
    <div v-if="!content" slot="content">
      <slot name="data"></slot>
    </div>
    <div class="tooltip-item" @mouseenter="onEnterTooltip">
      <slot name="item"></slot>
    </div>
  </el-tooltip>
</template>

<script>
const PLACEMENTS = Object.freeze({
  'top-left': 'bottom-start',
  'top-center': 'bottom',
  'top-right': 'bottom-end',
  'left-top': 'right-start',
  'left-center': 'right',
  'left-bottom': 'right-end',
  'bottom-left': 'top-start',
  'bottom-center': 'top',
  'bottom-right': 'top-end',
  'right-top': 'left-start',
  'right-center': 'left',
  'right-bottom': 'left-end'
})
export default {
  name: 'SparcTooltip',

  data() {
    return {
      hidden: false
    }
  },

  props: {
    content: {
      type: String,
      default: undefined
    },
    placement: {
      type: String,
      default: '',
      validator: function(val) {
        return val.match(/^[a-zA-Z]*-{1}[a-zA-Z]*$/)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isRepeatingItemContent: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    /**
     * Map placement string to Element placement string.
     * @returns {String}
     */
    mappedPlacement: function() {
      return PLACEMENTS[this.placement.toLowerCase()]
    },
    isDisabled: function() {
      return this.disabled || this.hidden
    },
  },

  methods: {
    hide(isHidden) {
      this.hidden = isHidden
    },
    onEnterTooltip(e) {
      // Hide the tooltip if it is simply repeating the items content and the items content is not cut off
      if (!this.isRepeatingItemContent) { return }
      const target = e.target
      this.hidden = target.scrollWidth <= target.offsetWidth
    }
  }
}
</script>
<style lang="scss" scoped>
.tooltip-item {
  display: flex;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
