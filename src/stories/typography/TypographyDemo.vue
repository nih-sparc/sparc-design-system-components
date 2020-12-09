<template>
  <div class="typography-demo">
    <div class="details">
      <div class="name">{{ typography.name }}</div>
      <p class="mb-0">font-size: {{ typography.fontSize }} / line-height: {{ typography.lineHeight }}</p>
      <p class="mb-0">weight: {{ typography.fontWeight }} / color: {{ typography.color }}</p>
    </div>
    <div class="example" :style="typography">
      A quick brown fox jumps over a lazy dog.
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypographyDemo',

  props: {
    typography: {
      default: () => {
        return {
          name: '',
          fontSize: '',
          lineHeight: '',
          fontWeight: '',
          color: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.typography-demo {
  display: flex;
}
.details {
  flex-shrink: 0;
  margin-right: 50px;
}
.name {
  text-transform: uppercase;
}
p {
  color: #3e3e3e;
}
</style>
