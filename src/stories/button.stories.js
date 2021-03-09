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
  title: 'Components/Button',
  decorators: [withKnobs],
  includeStories: []
}

export const Primary = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button>{{ text }}</el-button>
      <el-button :disabled="isDisabled">Disabled Button</el-button>
    </div>
  `
})

export const ButtonSizes = (className, text) => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="${className}">${text}</el-button>
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

export const Icons = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button icon="el-icon-edit" circle></el-button>
      <el-button icon="el-icon-check" circle></el-button>
      <el-button icon="el-icon-message" circle></el-button>
      <el-button icon="el-icon-star-off" circle></el-button>
      <el-button icon="el-icon-delete" circle></el-button>
    </div>
  `
})
