<template>
  <div name="details-tabs">
    <div class="details-tabs__container">
      <el-row type="flex">
        <el-col class="details-tabs__types-container" :span="24">
          <ul class="details-tabs__container--types">
            <li v-for="tab in tabs" :key="tab.label">
              <!-- Expect this to be either nuxt-link or router-link -->
              <component v-if="linkComponent"
                :is="linkComponent"
                :to="{ query: queryParams(tab.id) }"
                @click.native="$emit('tab-changed', tab)"
                :class="{ active: tab.id === activeTabId }"
                class="details-tabs__container--button"
              >
                {{ tab.label }}
              </component>
              <a v-else-if="tab.href"
                class="details-tabs__container--button"
                :class="{ active: tab.id === activeTabId }"
                :href="tab.href"
                target="_blank"
              >
                {{ tab.label }}
              </a>
              <a
                v-else
                class="details-tabs__container--button"
                :class="{ active: tab.id === activeTabId }"
                @click.prevent="$emit('tab-changed', tab)"
              >
                {{ tab.label }}
              </a>
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
      type: String
    },
    activeTabId: {
      type: String,
      required: true
    },
    routeName: {
      type: String,
      default: 'tab'
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
.details-tabs__container--types {
  margin: 1em;
  flex-wrap: wrap;
}
.details-tabs__container--data {
  overflow: auto;
  padding: 1em 3em;
  @media (max-width: 48em) {
    padding: 1em;
  }
}
.details-tabs__container--data:empty {
  display: none;
}
.details-tabs {
  &__container {
    background: white;

    &--types {
      border-bottom: 2px solid #dbdfe6;
      display: flex;
      list-style: none;
      padding: 0;
      li {
        margin: 0 2em;
        transform: translateY(2px);
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

.style2 {
  .details-tabs__container--types {
    margin: 0;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .details-tabs {
    &__container {
      &--types {
        border-bottom: none;
        background-color: $darkBlue;
        padding-left: 3rem;
        padding-top: .5rem;
        padding-bottom: 1rem;
        li {
          &:first-child {
            margin-left: 0;
          }
        }
      }

      &--button {
        color: white;
        &:hover,
        &.active {
          color: white;
          border-bottom: 2px solid white;
        }
      }
    }
  }
}
</style>
