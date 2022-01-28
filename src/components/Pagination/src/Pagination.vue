<template>
  <div class="sparc-design-system-pagination">
    <el-pagination
      :page-size="pageSize"
      :page-count="pageCount"
      :pager-count="5"
      layout="prev, pager, next"
      :total="totalCount"
      :current-page="selected"
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
