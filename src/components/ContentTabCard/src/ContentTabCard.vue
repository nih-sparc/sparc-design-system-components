<template>
  <div>
    <el-row :class="[tabStyle, 'tabs-container']">
      <el-col class="tabs-column">
        <span :class="[tabStyle, 'link-container']" v-for="tab in tabs" :key="tab.label">
          <!-- Expect this to be either nuxt-link or router-link -->
          <component v-if="linkComponent"
            :is="linkComponent"
            :to="{ query: queryParams(tab.id) }"
            @click.native="$emit('tab-changed', tab)"
            :class="[{ active: tab.id === activeTabId }, tabStyle, tabClass, 'tab-link px-8']"
          >
            {{ tab.label }}
          </component>
          <a v-else-if="tab.href"
            :class="[{ active: tab.id === activeTabId }, tabStyle, tabClass, 'tab-link px-8']"
            :href="tab.href"
            target="_blank"    
          >
            {{ tab.label }}
          </a>
          <a
            v-else
            :class="[{ active: tab.id === activeTabId }, tabStyle, tabClass, 'tab-link px-8']"
            @click.prevent="$emit('tab-changed', tab)"
          >
            {{ tab.label }}
          </a>
        </span>
      </el-col>
    </el-row>
    <div class="pt-16">
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

.tab-link {
  text-decoration: none;
  flex-wrap: nowrap;
  cursor: pointer;
  &.style1, &.style3 {
    border-bottom: .125em solid $lineColor1;
  }
  &.style1, &.style2 {
    margin-right: 2rem;
    padding-bottom: .12em;
  }
  &.style3 {
    margin-right: .5rem;
    padding-bottom: .2em;
  }
  &:hover, &.active {
    &.style1, &.style3 {
      border-bottom: .125em solid $purple;
      color: $purple;
      font-weight: 500;
    }
    &.style2 {
      border-bottom: .125em solid white;
      font-weight: 500;
    }
  } 
}
.tabs-column {
  .link-container:last-child > .tab-link {
    margin-right: 0;
  }
}
.tabs-container {
  display: block;
  &.style1, &.style3 {
    border-bottom: .125em solid $lineColor1;
  }
  &.style2 {
    background-color: $darkBlue;
    padding: 1.5rem;
  }
}
.content {
  overflow: auto;
}
</style>
