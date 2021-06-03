import './demo-styles.scss';

export default {
  title: 'Components/Select',
  includeStories: []
}

const defaultOpts = [{
  value: 'Option1',
  label: 'Option 1'
}, {
  value: 'Option2',
  label: 'Option 2'
}, {
  value: 'Option3',
  label: 'Option 3'
}, {
  value: 'Option4',
  label: 'Option 4'
}, {
  value: 'Option5',
  label: 'Option 5'
}]

const createSelect = (
  options,
  placeholder = 'Select',
  size = 'large',
  disabled = false,
  secondary = false
) => {
  return {
    data() {
      return {
        options: options,
        value: '',
        placeholder: placeholder,
        size: size,
        disabled: disabled,
        secondary: secondary
      }
    },
    template: `
      <el-select
        v-model="value"
        :placeholder=placeholder
        :size=size
        :disabled=disabled
        :class="[secondary ? 'secondary' : '']"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    `
  }
}

export const Primary = () => createSelect(
  defaultOpts
)

export const Secondary = () => createSelect(
  defaultOpts,
  undefined,
  undefined,
  undefined,
  true
)

export const Disabled = () => createSelect(
  defaultOpts,
  undefined,
  undefined,
  true,
  undefined
)

export const Large = () => createSelect(
  defaultOpts
)

export const Medium = () => createSelect(
  defaultOpts,
  undefined,
  'medium',
  undefined,
  undefined
)

export const Small = () => createSelect(
  defaultOpts,
  undefined,
  'small',
  undefined,
  undefined
)

export const Placeholder = () => createSelect(
  defaultOpts,
  'PLACEHOLDER',
  undefined,
  undefined,
  undefined
)

export const Grouping = () => ({
  data() {
    return {
      options: [
        {
          label: 'Group 1',
          options: [
            {
              value: 'Option1',
              label: 'Option 1'
            },
            {
              value: 'Option2',
              label: 'Option 2'
            },
          ]
        },
        {
          label: 'Group 2',
          options: [
            {
              value: 'Option3',
              label: 'Option 3'
            },
            {
              value: 'Option4',
              label: 'Option 4'
            },
          ]
        },
      ],
      value: []
    }
  },
  template: `
    <el-select v-model="value">
      <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-option-group>
    </el-select>
  `
})
