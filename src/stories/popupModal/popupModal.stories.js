const createDemo = (popupModalInfo) => {
  return {
    data() {
      return {
        placement: popupModalInfo.placement,
        trigger: popupModalInfo.trigger,
      }
    },
    template: `
      <el-popover
        :placement="placement"
        :trigger="trigger" 
      >
        <div>
          <p>Phrenic Nerve</p>
          <p><b>COMPONENTS</b></p>
          <p>Non-autonomic peripheral</p>
          <div style="margin-bottom: 5px;">
            <el-button class="extra-small">View Source</el-button>
          </div>
          <div>
            <el-button class="extra-small">Explore Data</el-button>
          </div>
        </div>
        <el-button slot="reference">Hover to activate</el-button>
      </el-popover>
    `
  }
}

export const Primary = () => createDemo(
  {
    placement: 'top-start',
    trigger: 'hover',
  }
)
