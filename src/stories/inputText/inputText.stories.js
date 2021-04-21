import { withKnobs, boolean } from '@storybook/addon-knobs';

import './demo-styles.scss';

const defaultProps = () => ({
  isDisabled: {
    default: boolean('Disabled', true)
  }
})

export default {
  title: 'Components/Text Input',
  decorators: [withKnobs],
  includeStories: []
}

export const Primary = () => ({
  data() {
    return {
      value: 'Email',
      secondaryValue: 'Email',
      successValue: 'im@nicohsueh.com',
      errorValue: 'im#nicohsueh.$com',
      disabledValue: 'Email'
    }
  },
  props: defaultProps(),
  template: `
    <div class="input-demo">
      <div class="input-wrap mb-32">
        <div class="label mr-32">
          Normal
        </div>
        <el-input v-model="value" />
      </div>

      <div class="input-wrap mb-32">
        <div class="label mr-32">
          Secondary
        </div>
        <el-input class="secondary" v-model="secondaryValue" />
      </div>

      <div class="input-wrap mb-32 el-form-item is-success">
        <div class="label mr-32">
          Success
        </div>
        <el-input v-model="successValue">
          <svgicon
            slot="suffix"
            class="background"
            name="close"
            height="16"
            width="16"
          />
        </el-input>
      </div>

      <div class="input-wrap mb-32 el-form-item is-error">
        <div class="label mr-32">
          Error
        </div>
        <el-input v-model="errorValue">
          <svgicon
            slot="suffix"
            class="background"
            name="close"
            height="16"
            width="16"
          />
        </el-input>
      </div>

      <div class="input-wrap mb-32">
        <div class="label mr-32">
          Disabled
        </div>
        <el-input v-model="disabledValue" :disabled="isDisabled" />
      </div>
    </div>
  `
})


export const Layout = () => ({
  data() {
    return {
      valueLarge: 'Email',
      valueMedium: 'Email',
      valueSmall: 'Email'
    }
  },
  props: defaultProps(),
  template: `
    <div class="input-demo">
      <div class="input-wrap mb-32">
        <div class="label mr-32">
          Large
        </div>
        <el-input v-model="valueLarge" />
      </div>

      <div class="input-wrap mb-32">
        <div class="label mr-32">
          Medium
        </div>
        <el-input v-model="valueMedium" size="medium" />
      </div>

      <div class="input-wrap mb-32">
        <div class="label mr-32">
          Small
        </div>
        <el-input v-model="valueSmall" size="small" />
      </div>
    </div>
  `
})
