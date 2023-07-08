<template>
  <div class="sparc-design-system-pagination">
    <el-pagination
      :page-size="pageSize"
      :page-count="pageCount"
      :pager-count="pagerCount"
      layout="prev, pager, next"
      :total="totalCount"
      :current-page="selected"
      :background="background"
      @current-change="selectPage"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    selected: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    totalCount: {
      type: Number,
      default: 0
    },
    background: {
      type: Boolean,
      default: false
    },
    pagerCount: {
      type: Number,
      default: 5
    }
  },
  computed: {
    pageCount: function() {
      return Math.ceil(this.totalCount / this.pageSize)
    }
  },
  methods: {
    /**
     * Emit select-page event
     */
    selectPage: function(page) {
      this.$emit('select-page', page)
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/_variables.scss';
.sparc-design-system-pagination {
  padding-top: 1em;
  text-align: center;

  .is-background {
    li.more,
    li.number {
      background: #f9f2fc;
      border: 1.5px solid $app-primary-color;
      color: $app-primary-color;
      border-radius: 50%;
    }
    .el-pager .more::before {
      line-height: 0;
    }
    li.number.active {
      color: white;
    }
    .btn-next, .btn-prev {
      background: $app-primary-color;
      color: white;
      border-radius: 50%;
    }
    .btn-next:disabled, .btn-prev:disabled {
      background: $lightGrey;
      opacity: 0.3;
      color: white;
    }
    .btn-next .el-icon, .btn-prev .el-icon {
      font-size: 1rem;
    }
    li.number:hover {
      background: $app-primary-color;
      color: white !important;
    }
  }

  button.btn-prev {
    background: transparent;
  }

  button.btn-next {
    background: transparent;
  }

  li.more,
  li.number {
    background: transparent;
  }

  li.number.active {
    border-bottom: 2px solid $purple;
  }

  .el-pager li {
    min-width: 0;
    margin: 0 .5em;
    font-size: 14px;
  }
}
</style>
