<template>
  <div name="content-overview-card">
    <div class="content_overview_card__container">
      <div class="content_overview_card__container--image">
        <slot name="image" />
      </div>
      <div class="content_overview_card__container--content">
        <h3>
          {{ subtitle }}
        </h3>
        <h2 class="content_overview_card__container--content-title-default">
          {{ formatTitle(title) }}
        </h2>
        <p class="content_overview_card__container--content-description-default">
          {{ description }}
        </p>
        <slot name="meta" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentOverviewCard',

  props: {
    breadcrumb: {
      type: Array,
      default: () => []
    },
    subtitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },

  methods: {
    /**
     * Formats title length for regular viewports
     * @param {String} title
     */
    formatTitle: function(title) {
      return title.length > 150 ? title.substring(0, 150) + '...' : title
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';

.content_overview_card {
  &__container {
    display: flex;
    flex-direction: row;
    border: solid 1px $lineColor1;
    padding: 2rem;
    background: white;
    margin: 1.25rem 0 2rem;
    &--image {
      flex-shrink: 0;
      margin-right: 1rem;
      width: 100%;
      @media (min-width: 48em) {
        height: 23rem;
        width: 23rem;
      }
      .dataset-image {
        border: solid 1px $lineColor1;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    &--content {
      h3 {
        color: $darkBlue;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 0.875rem;
        margin: 0;
        line-height: 1.5rem;
      }
    }
    &--content-title-default {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    &--content-description-default {
      font-size: 0.875rem;
      font-weight: normal;
      line-height: 1.5rem;
      // margin-bottom: 5rem;
    }
    &--content-meta {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }

    &--content-links {
      a {
        font-size: 0.75rem;
        color: $app-primary-color;
        font-weight: bold;
        line-height: 1.5rem;
        margin-left: 1rem;
      }
      button {
        background: $app-primary-color;
        height: 2.5rem;
        width: 12rem;
        border-radius: 4px;
        a {
          color: white;
          font-size: 14px;
          font-weight: 0.875rem;
          text-transform: uppercase;
          text-decoration: none;
          margin-left: 0;
        }
      }
    }
    .content-meta__item {
      margin-right: 5.3rem;
      h3 {
        color: black;
        margin-bottom: -4rem;
      }
      p {
        padding-top: 3rem;
        margin-top: 0.5rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .content_overview_card {
    margin: 0;
    margin-top: 0;
    &__page-route {
      height: 100%;
      p {
        padding-bottom: 0.75rem;
      }
    }
    &__container {
      flex-direction: column;
      &--content-meta {
        flex-direction: column;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .content_overview_card {
    &__container {
      &--image {
        img {
          width: 18rem;
          height: 18rem;
          margin-left: 1rem;
        }
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .content_overview_card {
    &__container {
      &--image {
        img {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
