<template>
  <div class="icon-card">
    <h2>{{title}}</h2>
    <div class="data-wrap">
      <component
        v-for="icon in icons"
        :is="icon.linkComponent"
        class="icon-card__item"
        :to="icon.href"
        :key="icon.title"
      >
        <img
          :src="icon.image"
          :alt="`Icon for ${icon.title} category`"
        />
        <p class="mb-0 mt-8">
          {{ icon.title }}
        </p>
      </component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconCard',

  props: {
    icons: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';

.icon-card {
  text-align: center;
  padding: 3em 0 4em;
  background-color: $background;
}
h2 {
  margin-bottom: 1.5625em;
}
.data-wrap {
  align-items: flex-start;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    padding-left: 0.4375rem;
    padding-right: 0.4375rem;
  }
}
.icon-card__item {
  color: #000;
  margin: 1rem 2rem;
  text-decoration: none;
  width: 70px;
  @media (min-width: 768px) {
    width: 128px;
    margin: 1.5625em 2rem;
  }
  &:hover,
  &:focus {
    opacity: 0.9;
  }
  img {
    background: #fff;
    border-radius: 50%;
    display: block;
    height: 70px;
    margin-bottom: 8px;
    width: 100%;
    @media (min-width: 768px) {
      height: 100%;
    }
  }
  p {
    font-size: 1em;
    font-weight: 700;
    color: $darkBlue;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
