<template>
  <el-checkbox
    :label="label"
    :disabled="disabled"
    v-model="current"
  >
    {{ display }}
  </el-checkbox>
</template>

<script>
export default {
  name: 'SparcCheckbox',

  props: {
    value: {
      type: Array,
      required: true
    },
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    display: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    current: {
      get: function() {
        return this.value
      },
      set: function(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';
::v-deep .el-checkbox__label {
  color: $grey;
}
::v-deep .el-checkbox__input {
  &.is-disabled {
    &.is-checked {
      .el-checkbox__inner {
        background-color: #909399;
        &::after {
          border-color: white;
          opacity: 80%;
        }
      }
    }
  }
  &.is-focus:not(.is-checked) {
    .el-checkbox__inner {
      border-color: $lineColor1;
    } 
  }
}

.el-checkbox {
  margin-left: 0;
  padding-top: 5px;
  &:first-child {
    padding-top: 0;
  }
}
</style>
