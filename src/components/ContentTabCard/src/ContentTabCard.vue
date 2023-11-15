<template>
  <div class="card-container">
    <span :class="[tabStyle, 'link-container']" v-for="tab in tabs" :key="tab.label">
      <!-- Expect this to be either nuxt-link or router-link -->
      <component v-if="linkComponent"
        :is="linkComponent"
        :to="{ query: queryParams(tab.id) }"
        @click.native="$emit('tab-changed', tab)"
        :class="[{ active: tab.id === activeTabId }, tabStyle, tabClass, 'tab-link p-16']"
      >
        {{ tab.label }}
      </component>
      <a v-else-if="tab.href"
        :class="[{ active: tab.id === activeTabId }, tabStyle, tabClass, 'tab-link p-16']"
        :href="tab.href"
        target="_blank"    
      >
        {{ tab.label }}
      </a>
      <a
        v-else
        :class="[{ active: tab.id === activeTabId }, tabStyle, tabClass, 'tab-link p-16']"
        @click.prevent="$emit('tab-changed', tab)"
      >
        {{ tab.label }}
      </a>
    </span>
    <div class="content mt-16 p-16">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContentTabCard',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    linkComponent: {
      type: String
    },
    activeTabId: {
      type: String,
      required: true
    },
    routeName: {
      type: String,
      default: 'tab'
    },
    tabStyle: {
      type: String,
      default: 'style1'
    }
  },
  computed: {
    tabClass: function() {
      switch(this.tabStyle) {
        case 'style1':
          return 'tab2'
        case 'style2':
          return 'tab4'
        case 'style3':
          return 'body1'
        default:
          return ''
      }
    }
  },
  methods: {
    queryParams(tabId) {
      return { ...this.$route.query, [this.routeName]: tabId }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';
.style1 {
  line-height: normal;
}
.tab-link {
  text-decoration: none;
  flex-wrap: nowrap;
  border: 1px solid $lineColor1;
  cursor: pointer;
  &:hover, &.active {
    &.style1, &.style3 {
      border: 1px solid $purple;
      border-bottom: .125em solid $purple;
      color: $purple;
      background-color: #f9f2fc;
      font-weight: 500;
    }
    &.style2 {
      border-bottom: .125em solid white;
      font-weight: 500;
    }
  } 
}
.content {
  border: 1px solid $lineColor1;
  background-color: white;
  overflow: auto;
}
.tab-link {
  background-color: white;
}
.card-container {
  line-height: normal;
}
</style>
