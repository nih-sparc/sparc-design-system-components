import { spaces, generateTable } from './spacing-demo-utils'

import './demo-styles.scss';

export default {
  title: 'Layout/Spacing',
  includeStories: [],
  excludeStories: ['SpacingValuesProps', 'PaddingPropertiesProps', 'MarginPropertiesProps']
}

export const MarginSingleSide = () => ({
  template: `
    <div class="spacing-demo-styles p-32">
      <div class="wrapper"><div class="mt-32 target">Target</div></div>
      <div class="wrapper"><div class="mr-32 target">Target</div></div>
      <div class="wrapper"><div class="mb-32 target">Target</div></div>
      <div class="wrapper"><div class="ml-32 target">Target</div></div>
    </div>
  `
})

export const MarginAllSides = () => ({
  template: `
    <div class="spacing-demo-styles p-32">
      <div class="wrapper"><div class="m-32 target">Target</div></div>
    </div>
  `
})

export const MarginVerticalSide = () => ({
  template: `
    <div class="spacing-demo-styles p-32">
      <div class="wrapper"><div class="my-32 target">Target</div></div>
    </div>
  `
})

export const MarginHorizontalSide = () => ({
  template: `
    <div class="spacing-demo-styles p-32">
      <div class="wrapper"><div class="mx-32 target">Target</div></div>
    </div>
  `
})


export const PaddingSingleSide = () => ({
  template: `
    <div class="spacing-demo-styles p-32">
      <div class="wrapper pt-32"><div class="target">Target</div></div>
      <div class="wrapper pr-32"><div class="target">Target</div></div>
      <div class="wrapper pb-32"><div class="target">Target</div></div>
      <div class="wrapper pl-32"><div class="target">Target</div></div>
    </div>
  `
})

export const PaddingAllSides = () => ({
  template: `
    <div class="spacing-demo-styles p-32">
      <div class="wrapper p-32"><div class="target">Target</div></div>
    </div>
  `
})

export const PaddingVerticalSide = () => ({
  template: `
    <div class="spacing-demo-styles p-32">
      <div class="wrapper py-32"><div class="target">Target</div></div>
    </div>
  `
})

export const PaddingHorizontalSide = () => ({
  template: `
    <div class="spacing-demo-styles p-32">
      <div class="wrapper px-32"><div class="target">Target</div></div>
    </div>
  `
})

const SpacingValuesProps = () => ({
  tableData: {
    type: Array,
    default: () => {
      return spaces.map(space => {
        return {
          rem: space / 16,
          px: space
        }
      })
    }
  }
})

export const SpacingValues = () => ({
  props: SpacingValuesProps(),
  template: `
    <el-table :data="tableData">
      <el-table-column
        prop="rem"
        label="rem"
      />
      <el-table-column
        prop="px"
        label="px"
      />
      <el-table-column
        label="Example"
      >
        <template slot-scope="scope">
          <div class="spacing-demo-styles spacing-table">
            <div class="wrapper" :class="['pt-' + scope.row.px, 'pr-' + scope.row.px]"><div class="target"></div></div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  `
})

export const Components = () => ({
  template: `
    <div class="spacing-demo-styles column">
      <div class="component mb-32">Component</div>
      <div class="component">Component</div>
    </div>
  `
})

export const WithGrid = () => ({
  template: `
    <div class="grid-demo">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-sm-4 px-48">
            <div class="outside">
              <div class="inside">
                <div class="spacing-demo-styles">
                  <div class="component">Component</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})


const PaddingPropertiesProps = () => ({
  tableData: {
    type: Array,
    default: () => {
      return generateTable('p', 'padding')
    }
  }
})

export const PaddingProperties = () => ({
  props: PaddingPropertiesProps(),
  template: `
    <el-table :data="tableData">
      <el-table-column
        prop="class"
        label="Class"
      >
        <template slot-scope="scope">
          <code>{{ scope.row.class }}</code>
        </template>
      </el-table-column>
      <el-table-column
        prop="property"
        label="Properties"
      >
        <template slot-scope="scope">
          <code>{{ scope.row.property[0] }}</code>
          <template v-if="scope.row.property[1]">
            <br>
            <code>{{ scope.row.property[1] }}</code>
          </template>
        </template>
      </el-table-column>
    </el-table>
  `
})



const MarginPropertiesProps = () => ({
  tableData: {
    type: Array,
    default: () => {
      return generateTable('m', 'margin')
    }
  }
})

export const MarginProperties = () => ({
  props: MarginPropertiesProps(),
  template: `
    <el-table :data="tableData">
      <el-table-column
        prop="class"
        label="Class"
      >
        <template slot-scope="scope">
          <code>{{ scope.row.class }}</code>
        </template>
      </el-table-column>
      <el-table-column
        prop="property"
        label="Properties"
      >
        <template slot-scope="scope">
          <code>{{ scope.row.property[0] }}</code>
          <template v-if="scope.row.property[1]">
            <br>
            <code>{{ scope.row.property[1] }}</code>
          </template>
        </template>
      </el-table-column>
    </el-table>
  `
})
