<template>
  <el-dialog
    :visible="visible"
    :show-close="false"
    class="sparc-design-system-large-modal-dialog"
    @close="closeDialog"
  >
    <div class="dialog-container">
      <button class="close-dialog" @click="closeDialog">
        <svgicon
          name="close"
          width="25px"
          height="25px"
          color="#71747c"
          class="close-icon"
        />
      </button>
      <div class="optional-content-container">
        <slot name="optionalContent" />
      </div>
      <div class="main-content-container">
        <slot name="mainContent" />
      </div>
    </div>
  </el-dialog>
</template>

<script>

export default {
  name: 'LargeModal',

  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    /**
     * Closes dialog
     */
    closeDialog: function() {
      this.$emit('close-download-dialog')
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/_variables.scss';
.sparc-design-system-large-modal-dialog {
  button:hover {
    box-shadow: none;
  }
  .optional-content-container {
    .download-button {
      padding-top: 10px;
      padding-bottom: 10px;
      background: white !important;
      text-align: center;
      color: $purple !important;
      min-width: 80px;
    }
    button:hover {
      background: white;
      color: $purple;
    }
  }
}
</style>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';

.sparc-design-system-large-modal-dialog {
  .dialog-container {
    display: flex;
    word-break: normal;
  }

  .main-content-container {
    border: 1px solid $lineColor1;
    border-left: none;
    width: 100%;
    padding: 2rem;
  }

  .optional-content-container {
    background-color: $purple;
    box-sizing: border-box;
    flex-shrink: 0;
    color: #fff;
    max-width: 316px;
    overflow: hidden;
    position: relative;
    padding: 2rem;
  }

  .optional-content-container:empty {
    display: none;
  }

  .close-dialog {
    background: none;
    border: none;
    cursor: pointer;
    padding: .25rem .25rem 0 0;
    position: absolute;
    right: 0;
  }

  ::v-deep .el-dialog {
    border-radius: 0;
    width: 868px;

    .el-dialog__body {
      padding: 0;
      color: black;
    }

    .el-dialog__header {
      display: none;
    }
  }
}
</style>
