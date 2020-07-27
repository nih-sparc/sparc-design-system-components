import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const defaultProps = () => ({
  isDisabled: {
    default: boolean('Disabled', false)
  },
  text: {
    default: text('Text', 'Button')
  }
})

export default {
  title: 'Button',
  decorators: [withKnobs]
}

export const Primary = () => ({
  props: defaultProps(),
  template: `<el-button :disabled="isDisabled">{{ text }}</el-button>`
})
export const Secondary = () => ({
  props: defaultProps(),
  template: `<el-button class="secondary" :disabled="isDisabled">{{ text }}</el-button>`
})
export const SecondaryAlt = () => ({
  props: defaultProps(),
  template: `<el-button class="secondary alt" :disabled="isDisabled">{{ text }}</el-button>`
})
export const Danger = () => ({
  props: defaultProps(),
  template: `<el-button class="danger" :disabled="isDisabled">{{ text }}</el-button>`
})
