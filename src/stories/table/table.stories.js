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
    <div class="table-wrap">
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
        <el-table-column width="60" />
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
    </div>
  `
})

export const HTMLTable = () => ({
  template: `
    <table>
      <thead>
        <tr>
          <th align="left">Size</th>
          <th align="left">Variable</th>
          <th align="left">Width (minimum)</th>
          <th align="left">Total Columns</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="left">Mobile</td>
          <td align="left"><code>sm</code></td>
          <td align="left"><code>20rem</code></td>
          <td align="left">4</td>
        </tr>
        <tr>
          <td align="left">Tablet</td>
          <td align="left"><code>md</code></td>
          <td align="left"><code>47rem</code></td>
          <td align="left">8</td>
        </tr>
        <tr>
          <td align="left">Desktop</td>
          <td align="left"><code>lg</code></td>
          <td align="left"><code>64rem</code></td>
          <td align="left">16</td>
        </tr>
        <tr>
          <td align="left">Large Display</td>
          <td align="left"><code>xlg</code></td>
          <td align="left"><code>120rem</code></td>
          <td align="left">16</td>
        </tr>
      </tbody>
    </table>
  `
})
