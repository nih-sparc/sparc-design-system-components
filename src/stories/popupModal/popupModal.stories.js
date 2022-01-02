export const Primary = () => ({
  data() {
    return {
      trigger: 'hover',
      modalPlacements: [
        [
          'top-start',
          'top',
          'top-end'
        ],
        [
          'left-start',
          'left',
          'left-end'
        ],
        [
          'bottom-start',
          'bottom',
          'bottom-end'
        ],
        [
          'right-start',
          'right',
          'right-end'
        ]
      ]
    }
  },
  template: `
  <div>
    <el-row v-for="placements in modalPlacements" class="mb-16" type="flex" justify="center">
      <el-popover
        class="mr-16"
        v-for="placement in placements" 
        :key="placement" 
        :placement="placement"
        :trigger="trigger" 
      >
        <div>
          Phrenic Nerve</br>
          <b>COMPONENTS</b></br>
          Non-autonomic peripheral</br>
          <div style="margin-bottom: 5px;">
            <el-button class="extra-small">View Source</el-button>
          </div>
          <div>
            <el-button class="extra-small">Explore Data</el-button>
          </div>
        </div>
        <el-button slot="reference">{{placement}}</el-button>
      </el-popover>
    </el-row>
  </div>
  `
})