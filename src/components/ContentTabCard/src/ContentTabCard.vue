<template>
  <div name="details-tabs">
    <div class="details-tabs__container">
      <el-row type="flex">
        <el-col :span="24">
          <ul class="details-tabs__container--types">
            <li v-for="tab in tabs" :key="tab.label">
              <!-- Expect this to be either nuxt-link or router-link -->
              <component
                :is="linkComponent"
                :to="{ query: queryParams(tab.type) }"
                :class="{ active: tab.type === activeTab }"
                class="details-tabs__container--button"
              >
                {{ tab.label }}
              </component>
            </li>
          </ul>
        </el-col>
      </el-row>
      <div class="details-tabs__container--data">
        <slot />
      </div>
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
      type: String,
      default: "nuxt-link"
    },
    defaultTabType: {
      type: String,
      default: ''
    }
  },
  computed: {
    activeTab: function() {
      console.log("ROUTE = ", this.$router)
      return this.$route.query.tab ? this.$route.query.tab : this.defaultTabType
    }
  },
  watch: {
    /**
   * Set the active tab to match the current query values.
   */
    '$route.query': {
      handler: function() {
        this.$emit('tab-changed', this.activeTab)
      }
    }
  },
  methods: {
    queryParams(tabType) {
      const query = { ...this.$route.query }
      if (tabType === this.defaultTabType && 'tab' in query) {
        delete query.tab
      } else if (tabType !== this.defaultTabType) {
        query['tab'] = tabType
      }
      return query
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';
.details-tabs {
  margin: 1.25rem;
  &__container {
    background: white;
    border: solid 1px #dbdfe6;
    padding: 2em;

    &--types {
      border-bottom: 2px solid #dbdfe6;
      display: flex;
      list-style: none;
      margin: 0 0 1.5rem;
      padding: 0;
      li {
        margin: 0 2em;
        transform: translateY(2px);
        &:first-child {
          margin-left: 0;
        }
      }
    }

    &--button {
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
  }
}
@media screen and (max-width: 768px) {
  .details-tabs {
    &__container {
      margin-top: 1.5rem;
      padding-right: 1rem;
      padding-left: 1rem;
      &--types {
        display: -webkit-box;
        width: max-content;
      }
      &--button {
        font-size: 1em;
        padding-right: 0;
        padding-left: 0;
      }
      li {
        margin-right: 0;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .details-tabs {
    &__container {
      &--types {
        width: 100%;
      }
    }
  }
}
</style>
