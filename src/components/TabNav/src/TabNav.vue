<template>
  <div name="tab-nav">
    <ul class="tabs">
      <li v-for="tab in tabs" :key="tab.label">
        <a
          class="tabs__button"
          :class="{ active: tab.type === activeTab }"
          href="#"
          @click.prevent="$emit('set-active-tab', tab.type)"
        >
          {{ tab.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabNav',
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
.tabs {
  display: flex;
  list-style: none;
  overflow: auto;
  width: calc(100% - 2rem);
  margin: 0 -2rem 0 0;
  padding: 0 1rem;
  @media (min-width: 48em) {
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0 0.625em;
    @media (min-width: 48em) {
      margin: 0 2.25em;
    }
    &:first-child {
      margin-left: 0;
    }
  }
  &__button {
    background: none;
    border-bottom: 2px solid transparent;
    color: $app-primary-color;
    cursor: pointer;
    display: block;
    font-size: 0.75em;
    font-weight: 500;
    outline: none;
    padding: 0;
    text-decoration: none;
    text-transform: uppercase;
    @media (min-width: 48em) {
      font-size: 1.25em;
      font-weight: 400;
      text-transform: none;
    }
    &:hover,
    &:focus,
    &.active {
      border-bottom-color: $app-primary-color;
      font-weight: 500;
    }
  }
}

.style2 {
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
