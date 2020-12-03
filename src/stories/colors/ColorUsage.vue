<template>
  <div class="color-demo">
    <div class="color-square mr-16" :style="{ backgroundColor: color.hex }" />
    <template v-if="color.name">{{ color.name }} : </template>{{ color.usage }}
  </div>
</template>

<script>
export default {
  name: 'ColorUsage',

  props: {
    color: {
      type: Object,
      default: () => {
        return {
          name: '',
          hex: '',
          rbg: '',
          cmyk: '',
          variable: ''
        }
      }
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
  flex-shrink: 0;
  height: 20px;
  width: 20px;
}
</style>
