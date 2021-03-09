<template>
  <div>
    <img :src="logoSrc" alt="Logo for SPARC">
  </div>
</template>

<script>
export default {
  name: 'SparcLogo',

  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    logoSrc: function() {
      return require (`@/assets/img/logos/sparc-logo/sparc-logo-${this.type}.svg`)
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
