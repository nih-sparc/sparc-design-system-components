<template>
  <div class="color-demo">
    <div class="color-circle mr-24" :style="{ backgroundColor:  hex }" />
    <div class="color-info">
      <h3>{{ name }}</h3>
      <p class="mb-0"><em>Hex</em>: {{ hex }}</p>
      <p class="mb-0"><em>RBG</em>: {{ rbg }}</p>
      <p class="mb-0"><em>CMYK</em>: {{ cmyk }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorDemo',

  props: {
    name: {
      type: String,
      default: ''
    },
    hex: {
      type: String,
      default: ''
    },
    rbg: {
      type: String,
      default: ''
    },
    cmyk: {
      type: String,
      default: ''
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
</style>
