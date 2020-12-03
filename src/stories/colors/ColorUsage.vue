<template>
  <div class="color-demo">
    <div class="color-square mr-16" :style="{ backgroundColor:  hex }" />
    {{ name }} : {{ usage }}
  </div>
</template>

<script>
export default {
  name: 'ColorUsage',

  props: {
    name: {
      type: String,
      default: ''
    },
    hex: {
      type: String,
      default: ''
    },
    usage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.color-demo {
  align-items: center;
  display: flex;
}
.color-square {
  height: 20px;
  width: 20px;
}
</style>
