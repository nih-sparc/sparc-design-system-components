<template>
    <img class="logo" :src="logoSrc" alt="Logo for SPARC">
</template>

<script>
export default {
  name: 'SparcLogo',

  props: {
    type: {
      type: String,
      default: 'primary'
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    logoSrc: function() {
      return require (`@/assets/img/sparc-logo/sparc-${this.secondary ? 'alt-' : ''}logo-${this.type}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  display: block;
  height: auto;
  width: 100%;
}
</style>
