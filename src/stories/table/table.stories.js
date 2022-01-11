import datasetData from './dataset-data.js'

const defaultProps = () => ({
  tableData: {
    type: Array,
    default: () => {
      return datasetData
    }
  },
  tabs: {
    type: Array,
    default: () => {
      return [
        {
          label: 'Datasets',
          id: 'datasets'
        }
      ]
    }
  },
  activeTabId: {
    type: String,
    default: () => {
      return 'datasets'
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
    <content-tab-card
      :tabs="tabs"
      :active-tab-id="activeTabId"
    >
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
          width="160"
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
        <el-table-column prop="description" label="Description" :min-width="400" width="auto" sortable />
        <el-table-column width="40" />
        <el-table-column prop="createdAt" label="Last Published" width="150" sortable>
          Febuary 20, 2020
        </el-table-column>
        <el-table-column prop="size" label="Size" width="100" sortable>
          780.29 GB
        </el-table-column>
      </el-table>
    </content-tab-card>
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
