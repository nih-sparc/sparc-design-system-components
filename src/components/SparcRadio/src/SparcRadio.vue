<template>
  <el-radio
    :label="label"
    :disabled="disabled"
    v-model="current"
  >
    {{ display }}
  </el-radio>
</template>

<script>
export default {
  name: 'SparcRadio',

  props: {
    value: {
      type: [String, Number, Boolean],
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
::v-deep .el-radio__label {
  color: $grey;
}
::v-deep .el-radio__input {
  &.is-disabled {
    &.is-checked {
      .el-radio__inner {
        background-color: #909399;
        &::after {
          background-color: white;
          opacity: 80%;
        }
      }
    }
  }
  &:not(.is-checked) {
    .el-radio__inner {
      border-color: $lightGrey;
    } 
  }
}

.el-radio {
  margin-left: 0;
  padding-top: 5px;
  &:first-child {
    padding-top: 0;
  }
}

</style>