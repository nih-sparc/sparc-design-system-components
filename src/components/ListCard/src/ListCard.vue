<template>
  <el-table
    class="sparc-design-system-list-card-table"
    :data="data"
    :show-header="false"
    empty-text="No Results"
  >
    <el-table-column>
      <template slot-scope="scope">
        <el-row>
          <list-card-item
            :title="scope.row.title"
            :summary="scope.row.summary"
            :url="scope.row.url"
            :date="scope.row.date"
            :image="scope.row.image"
          />
        </el-row>
        <el-row v-if="sectionText && scope.$index === data.length-1">
          <div class="section-container">
            <a class="section-text" v-if="sectionUrl" :href="sectionUrl">
              {{sectionText}}
            </a>
            <h3 v-else class="section-text">
              {{sectionText}}
            </h3>
          </div>
        </el-row>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import ListCardItem from './ListCardItem.vue'

export default {
  components: { ListCardItem },
  name: 'ListCard',

  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    sectionText: {
      type: String,
      default: ""
    },
    sectionUrl: {
      type: String,
      default: ""
    }
  }
}
</script>
<style lang="scss">
.sparc-design-system-list-card-table::before {
  display: none;
}
.sparc-design-system-list-card-table td.el-table__cell {
  border: none;
  padding: 0;
}
.sparc-design-system-list-card-table tbody {
  tr:not(:last-child)>td .cell::after {
    content: "";
    border-bottom: 2px solid #D8D8D8;
    width: 100%;
    margin: 0 auto;
    display: block;
  }
  tr:last-of-type>td {
    background-color: white !important;
  }
  tr:last-of-type>td .cell {
    padding: 0;
    .list-item {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .list-item:hover {
      background-color: #F7FAFF;
      transition: background-color 0.25s ease;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '../../../assets/_variables.scss';
  .sparc-design-system-list-card-table {
    border: 1px solid #DBDFE6;
  }
  .section-container {
    border-top: 2px solid #D8D8D8;
    margin: 0 1rem;
    padding: 1.5rem 0
  }
  .section-text {
    margin-left: 1rem;
    font-weight: bold;
    color: $darkBlue;
  }
</style>
