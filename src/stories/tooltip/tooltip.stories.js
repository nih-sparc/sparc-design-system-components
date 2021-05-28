import SparcTooltip from '@/components/SparcTooltip/src/SparcTooltip.vue'
import './demo-styles.scss';

export default {
  title: 'Components/Tooltip',
  includeStories: []
}

export const Primary = () => ({
  components: {
    SparcTooltip
  },

  data() {
    return {
      tooltipDirs: [
        [
          'top-left',
          'top-center',
          'top-right'
        ],
        [
          'left-top',
          'left-center',
          'left-bottom'
        ],
        [
          'bottom-left',
          'bottom-center',
          'bottom-right'
        ],
        [
          'right-top',
          'right-center',
          'right-bottom'
        ]
      ]
    }
  },

  template: `
    <div>
      <el-row v-for="dirs in tooltipDirs" type="flex" justify="center">
        <sparc-tooltip v-for="dir in dirs" :key="dir" :placement="dir" :content="dir">
          <el-button slot="item">{{ dir }}</el-button>
        </sparc-tooltip>
      </el-row>
    </div>
  `
})

export const SingleContent = () => ({
  components: {
    SparcTooltip,
  },

  template: `
    <div>
      <el-row type="flex" justify="center">
        <sparc-tooltip placement="top-center" content="Sample content text">
          <el-button slot="item">Hover over me!</el-button>
        </sparc-tooltip>
      </el-row>
    </div>
  `
})

export const MoreContent = () => ({
  components: {
    SparcTooltip,
  },

  template: `
    <div>
      <el-row type="flex" justify="center">
        <sparc-tooltip placement="top-center">
          <div slot="data">This is multi-line<br/>content sample text</div>
          <el-button slot="item">Hover over me!</el-button>
        </sparc-tooltip>
      </el-row>
    </div>
  `
})

export const Item = () => ({
  components: {
    SparcTooltip,
  },

  template: `
    <div>
      <el-row type="flex" justify="center">
        <sparc-tooltip placement="top-center" content="top-center">
          <el-button slot="item">Hover over me!</el-button>
        </sparc-tooltip>
      </el-row>
    </div>
  `
})

export const LinkContent = () => ({
  components: {
    SparcTooltip,
  },

  template: `
    <div>
      <el-row type="flex" justify="center">
        <sparc-tooltip placement="top-center">
          <div slot="data">Content with <a href="#">link</a></div>
          <el-button slot="item">Hover over me!</el-button>
        </sparc-tooltip>
      </el-row>
    </div>
  `
})
