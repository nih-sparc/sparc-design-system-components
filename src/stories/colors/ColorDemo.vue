<template>
  <div class="color-demo">
    <div class="color-circle mr-24" :style="{ backgroundColor: color.hex }" />
    <div class="color-info">
      <h3>{{ color.name }}</h3>
      <p class="mb-0"><em>Hex</em>: {{ color.hex }}</p>
      <p class="mb-0"><em>RBG</em>: {{ color.rbg }}</p>
      <p class="mb-0"><em>CMYK</em>: {{ color.cmyk }}</p>
      <p class="mb-0"><em>Sass Variable</em>: <span class="code">{{ color.variable }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorDemo',

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
  align-items: flex-start;
  display: flex;
}
.color-circle {
  border-radius: 50%;
  flex-shrink: 0;
  height: 72px;
  width: 72px;
}
p {
  font-size: 1rem;
}
em {
  font-style: normal;
  text-transform: uppercase;
}
.code {
  font-family: monospace;
}
</style>
