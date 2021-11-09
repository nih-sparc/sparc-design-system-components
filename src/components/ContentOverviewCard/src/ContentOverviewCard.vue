<template>
  <div name="content-overview-card">
    <el-row class="content_overview_card__container">
      <el-col :span="7">
        <img class="card-image" :src="image" />
      </el-col>
      <el-col :span="17">
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
          <div class="metadata-container">
              <slot name="metadata"/>
          </div>
          <slot name="buttons" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ContentOverviewCard',

  props: {
    subtitle: {
      type: String,
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
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
    &--content {
      padding-left: 1rem;
      h3 {
        cursor: default;
        color: $darkBlue;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 0.875rem;
        margin: 0;
        line-height: 1.5rem;
      }
    }
    &--content-title-default {
      cursor: default;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2rem;
      margin-bottom: 1rem;
    }
    &--content-description-default {
      cursor: default;
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }
  }
}
.metadata-container {
  cursor: default;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 48em) {
    flex-direction: column;
  }
}

.card-image {
  width: stretch;
  aspect-ratio: 1 / 1;
}
</style>
