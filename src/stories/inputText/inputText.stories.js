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

export const TextAndLink = () => ({
  data() {
    return {
      val: ''
    }
  },
  template: `
    <div class="input-demo">
      <div class="input-wrap">
        <el-input v-model="val" class="text-and-link" placeholder="Enter the password">
          <a href="#" slot="suffix">Forgot?</a>
        </el-input>
      </div>
    </div>
  `
})

export const TextAndCalendarLink = () => ({
  data() {
    return {
      val: ''
    }
  },
  template: `
    <div class="input-demo">
      <div class="input-wrap">
        <el-date-picker
          v-model="val"
          type="date"
          placeholder="Enter Date"
        />
      </div>
    </div>
  `
})


export const Stepper1 = () => ({
  data() {
    return {
      num: 0
    }
  },
  template: `
    <div>
      <el-input-number v-model="num" :min="1" :max="10" />
    </div>
  `
})

export const Stepper2 = () => ({
  data() {
    return {
      num: 0
    }
  },
  template: `
    <div>
      <el-input-number v-model="num" :min="1" :max="10" controls-position="right" />
    </div>
  `
})



export const FutureUse = () => ({
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      select: '',
      select2: ''
    }
  },
  template: `
    <div class="future-use-input-demo input-demo">
      <div class="input-wrap mb-32">
        <el-input placeholder="Enter the URL" v-model="input1">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>

      <div class="input-wrap mb-32">
        <el-input placeholder="Address details" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="City">
            <el-option label="Philadelphia" value="Philadelphia"></el-option>
            <el-option label="New York City" value="New York City"></el-option>
            <el-option label="Boston" value="Boston"></el-option>
          </el-select>
        </el-input>
      </div>

      <div class="input-wrap mb-32">
        <el-input placeholder="Height" v-model="input4" class="input-with-select">
          <el-select v-model="select2" slot="append" placeholder="Unit">
            <el-option label="CM" value="CM"></el-option>
            <el-option label="IN" value="IN"></el-option>
          </el-select>
        </el-input>
      </div>

      <div class="input-wrap mb-32">
        <el-input placeholder="Please input" v-model="input2">
          <template slot="append">.com</template>
        </el-input>
      </div>
    </div>
  `
})
