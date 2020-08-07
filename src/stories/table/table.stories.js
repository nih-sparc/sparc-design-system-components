import datasetData from './dataset-data.js'

const defaultProps = () => ({
  titleColumnWidth: {
    type: Number,
    default: 300
  },
  tableData: {
    type: Array,
    default: () => {
      return datasetData
    }
  }
})

export default {
  title: 'Components/Table',
  decorators: [],
  includeStories: []
}

export const Primary = () => ({
  props: defaultProps(),
  template: `
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'name', order: 'descending'}"
      empty-text="No Results"
    >
      <el-table-column
        :fixed="true"
        prop="name"
        label="Title"
        sortable
        :width="titleColumnWidth"
      >
        <template slot-scope="scope">
          <a href="#">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="banner" label="Image" width="160">
        <template slot-scope="scope">
          <img
            :src="scope.row.banner"
            alt="Banner image"
            height="128"
            width="128"
          />
        </template>
      </el-table-column>
      <el-table-column prop="description" label="Description" :width="400" sortable />
      <el-table-column prop="createdAt" label="Last Published" width="200" sortable>
        <template slot-scope="scope">
          {{ scope.row.createdAt }}
        </template>
      </el-table-column>
      <el-table-column prop="size" label="Size" width="150" sortable>
        <template slot-scope="scope">
          {{ scope.row.size }}
        </template>
      </el-table-column>
    </el-table>
  `
})
