import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const defaultProps = () => ({
  isDisabled: {
    default: boolean('Disabled', true)
  },
  text: {
    default: text('Text', 'Submit')
  }
})

export default {
  title: 'Button',
  decorators: [withKnobs],
  includeStories: []
}

export const Primary = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button>{{ text }}</el-button>
      <el-button :disabled="isDisabled">Disabled Button</el-button>
      <el-button class="large">Large Button</el-button>
      <el-button>Normal Button</el-button>
      <el-button class="small">Small Button</el-button>
    </div>
  `
})

export const Secondary = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="secondary">{{ text }}</el-button>
      <el-button class="secondary" :disabled="isDisabled">Disabled Button</el-button>
    </div>
  `
})
export const SecondaryAlt = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="secondary alt">{{ text }}</el-button>
      <el-button class="secondary alt" :disabled="isDisabled">Disabled Button</el-button>
    </div>
  `
})
export const Danger = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="danger">{{ text }}</el-button>
      <el-button class="danger" :disabled="isDisabled">Disabled Button</el-button>
    </div>
  `
})
