<template>
  <div class="typography-demo">
    <div class="details">
      <div class="name">{{ typography.name }}</div>
      <p v-if="typography.usage" class="mb-0"> ({{ typography.usage }})</p>
      <p class="mb-0">font-size: {{ typography.fontSize }} / line-height: {{ typography.lineHeight }}</p>
      <p class="mb-0">weight: {{ typography.fontWeight }} / color: {{ typography.color }}</p>
      <p v-if="typography.showBackgroundColor" class="mb-0">background-color: {{ typography.backgroundColor }}</p>
      <p v-if="typography.textDecoration" class="mb-0">decoration: {{ typography.textDecoration }}</p>
    </div>
    <div class="example">
      <span :style="typography">
        A quick brown fox jumps over a lazy dog.
      </span>
      <span v-if="typography.note" class="mt-8 note"> <em>Note</em>: {{ typography.note }}</span>
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
  flex-basis: 250px;
  flex-shrink: 0;
  margin-right: 50px;
}
.example {
  flex: 1;
  span {
    color: #3e3e3e;
    display: inline-block;
  }
}
.name {
  text-transform: uppercase;
}
.note {
  font-size: 0.85rem;
  em  {
    font-style: normal;
    text-transform: uppercase;
  }
}
</style>
