<template>
  <div class="about-tab-nav">
    <ul class="tabs">
      <li v-for="tab in tabs" :key="tab.id">
        <a 
          v-if="tab.href"
          class="tabs__button"
          :class="{ active: tab.id === activeTab }"
          :href="tab.href"
        >
          {{ tab.label }}
        </a>
        <a
          v-else
          class="tabs__button"
          :class="{ active: tab.id === activeTab }"
          href="#"
          @click.prevent="$emit('tab-changed', tab.id)"
        >
          {{ tab.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutTab',
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    activeTab: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';
.about-tab-nav {
  padding: 1rem;
}
.tabs {
  display: flex;
  list-style: none;
  overflow: auto;
  width: calc(100% - 2rem);
  padding: 0 1rem;
  @media (min-width: 48em) {
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0 0.625em;
    @media (min-width: 48em) {
      margin: 0 1em;
    }
    &:first-child {
      margin-left: 0;
    }
  }
  &__button {
    background: none;
    border-bottom: 2px solid transparent;
    color: $text-color;
    cursor: pointer;
    display: block;
    font-size: 0.75em;
    font-weight: 500;
    outline: none;
    padding: 0;
    text-decoration: none;
    text-transform: uppercase;
    @media (min-width: 48em) {
      font-size: 1em;
      text-transform: none;
    }
    &:hover,
    &:focus,
    &.active {
      border-bottom-color: $app-primary-color;
      color: $app-primary-color;
    }
  }
}

.tabs__button {
  padding: 0 .25em;
}
.style2 {
  background-color: $darkBlue;
  .tabs__button {
    color: #fff;
    &:hover,
    &:focus,
    &.active {
      border-bottom-color: #fff;
    }
  }
}
</style>
