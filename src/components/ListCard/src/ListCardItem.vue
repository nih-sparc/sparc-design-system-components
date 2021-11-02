<template>
  <div class="list-item">
    <el-row type="flex">
      <el-col :xs="image === undefined ? 0 : 4" :sm="image === undefined ? 0 : 3" :md="image === undefined ? 0 : 2" :lg="image === undefined ? 0 : 2">
        <img
          :src="image"
          class="list-card-image"
        />
      </el-col>
      <el-col :xs="image === undefined ? 24 : 20" :sm="image === undefined ? 24 : 21" :md="image === undefined ? 24 : 22" :lg="image === undefined ? 24 : 22">
        <div class="list-card-content">
          <h3>
            <a
              :href="url"
              :target="openInNewTab ? '_self' : '_blank'"
            >
              {{ title }}
            </a>
          </h3>
          <div v-if="image !== undefined">
            <p class="list-item__date spacing">
              {{ formattedDate }}
            </p>
            <p class="spacing">{{ summary }}</p>
          </div>
          <div v-else>
            <p class="spacing">{{ summary }}</p>
            <p class="list-item__date spacing">
              {{ formattedDate }}
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
  name: 'ListCardItem',

  props: {
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    openInNewTab: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: undefined
    }
  },

  computed: {
    /**
     * Compute and formate start date
     * @returns {String}
     */
    formattedDate: function() {
      return this.formatDate(this.date || '')
    }
  },

  methods: {
    formatDate: function(date) {
      return date != '' ? format(parseISO(date), 'MMMM d, yyyy') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1rem;
  line-height: 1.15rem;
  margin-bottom: 0;
}
p {
  margin-bottom: 0rem;
  cursor: default;
}
.list-item {
  padding: 1.5rem 0;
}
.list-item__date {
  font-size: 1rem;
  font-style: italic;
  cursor: default;
}
.list-card-image {
  width: stretch;
  aspect-ratio: 1 / 1;
}
.list-card-content {
  margin-left: 1rem;
}
.spacing {
  margin-top: .5rem;
}
</style>
