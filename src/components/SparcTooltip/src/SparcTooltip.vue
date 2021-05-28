<template>
  <el-tooltip
    :content="content"
    :disabled="disabled"
    :placement="mappedPlacement"
  >
    <div v-if="!content" slot="content">
      <slot name="data"></slot>
    </div>
    <slot name="item"></slot>
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
    }
  },

  computed: {
    /**
     * Map placement string to Element placement string.
     * @returns {String}
     */
    mappedPlacement: function() {
      return PLACEMENTS[this.placement.toLowerCase()]
    }
  },
}
</script>
