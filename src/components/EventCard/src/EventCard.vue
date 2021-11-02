<template>
  <div class="upcoming-event">
    <div class="upcoming-event__image">
      <template>
        <a v-if="url" :href="url">
          <img :src="eventImage" :alt="title" />
        </a>
        <div v-else>
          <img :src="eventImage" :alt="title" />
        </div>
      </template>

      <span>{{ eventType }}</span>
    </div>
    <h3>
      <template>
        <a v-if="url" :href="url">
          {{ title }}
        </a>
        <div v-else>
          {{ title }}
        </div>
      </template>
    </h3>
    <div class="upcoming-event__detail">
      <svgicon name="calendar" height="16" width="16" />
      <p>{{ getDateRange(startDate, endDate) }}</p>
    </div>
    <div v-if="location" class="upcoming-event__detail">
      <svgicon name="map" height="16" width="16" />
      <p>{{ location }}</p>
    </div>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
  name: 'EventCard',

  props: {
    title: {
      type: String,
      required: true
    },
    eventImage: {
      type: String,
      required: true
    },
    eventType: {
      type: String,
    },
    location: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
    },
    url: {
      type: String
    }
  },

  methods: {
    /**
     * Get event date range, if there is no end date, default to start date
     * @returns {String}
     */
    getDateRange: function(startDate, endDate) {
      startDate = this.formatDate(startDate || '')
      endDate = this.formatDate(endDate || '')
      return startDate === endDate || !endDate
        ? startDate
        : `${startDate} - ${endDate}`
    },
    formatDate: function(date) {
      return date != '' ? format(parseISO(date), 'MMMM d, yyyy') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_variables.scss';

.upcoming-event {
  background: #fff;
  border: 1px solid #dbdfe6;
  color: $darkBlue;
  padding: 1em;
  margin: 1em;
  &__image {
    margin-bottom: 1rem;
    overflow: hidden;
    padding-top: 100%;
    position: relative;
    img {
      display: block;
      height: auto;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
    span {
      background: $purple;
      border-radius: 15px;
      color: #fff;
      font-size: 0.875rem;
      top: 10px;
      padding: 0 0.65rem;
      position: absolute;
      right: 14px;
    }
  }
  &__detail {
    align-items: baseline;
    display: flex;
    margin-bottom: 0.625rem;
    &:last-child {
      margin: 0;
    }
    .svg-icon {
      flex-shrink: 0;
      margin-right: 0.5rem;
    }
    p {
      margin: 0;
    }
  }
  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 1rem;
    line-height: 1.375rem;
  }
  a {
    color: $purple;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>
