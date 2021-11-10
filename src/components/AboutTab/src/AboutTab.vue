<template>
  <ul class="tabs">
    <li v-for="tab in tabs" :key="tab.id">
      <a 
        v-if="tab.href"
        class="tab-button"
        :class="{ active: tab.id === activeTab }"
        :href="tab.href"
        target="_blank"
      >
        {{ tab.label }}
      </a>
      <a
        v-else
        class="tab-button"
        :class="{ active: tab.id === activeTab }"
        @click.prevent="$emit('tab-changed', tab.id)"
      >
        {{ tab.label }}
      </a>
    </li>
  </ul>
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
.tabs {
  border-bottom: 2px solid #dbdfe6;
  display: flex;
  list-style: none;
  padding: 0;
  li {
    margin: 0 2em;
    transform: translateY(2px);
  }
}

.tab-button {
  background: none;
  border: none;
  color: $darkBlue;
  cursor: pointer;
  display: block;
  font-size: 1.375em;
  font-weight: normal;
  outline: none;
  padding: 0.5rem;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  &:hover,
  &.active {
    color: $purple;
    border-bottom: 2px solid $purple;
  }
}

.tabs.style2 {
  overflow-x: auto;
  border-bottom: none;
  background-color: $darkBlue;
  padding-left: 32px;
  padding-top: .5rem;
  padding-bottom: 1rem;
  margin: 0;
  li {
    &:first-child {
      margin-left: 0;
    }
  }
  .tab-button {
    color: white;
    &:hover,
    &.active {
      color: white;
      border-bottom: 2px solid white;
    }
  }
}
</style>
