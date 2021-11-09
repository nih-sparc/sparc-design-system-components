import SparcCheckbox from '@/components/SparcCheckbox/src/SparcCheckbox.vue'
import './demo-styles.scss';

export default {
  title: 'Components/Checkboxes',
  includeStories: []
}

const createDemo = (data, val) => {
  return {
    components: { SparcCheckbox },
    data() {
      return {
        data: data,
        checkboxVal: val
      }
    },
    template: `
      <div class="checkbox-group">
        <sparc-checkbox
          v-for="item in data"
          v-bind:key="item.label"
          v-model="checkboxVal"
          :label="item.label"
          :disabled="item.disabled || false"
          :display="item.display"
        />
      </div>
    `
  }
}

export const Primary = () => createDemo(
  [
    {
      label: 1,
      display: "Option 1"
    },
    {
      label: 2,
      display: "Option 2"
    },
    {
      label: 3,
      display: "Option 3"
    }
  ],
  [1]
)


export const Disabled = () => createDemo(
  [
    {
      label: 1,
      display: "Checked & Disabled",
      disabled: true
    },
    {
      label: 2,
      display: "Unchecked & Disabled",
      disabled: true
    }
  ],
  [1]
)

export const Single = () => createDemo(
  [
    {
      label: 1,
      display: "Option 1"
    },
    {
      label: 2,
      display: "Option 2"
    }
  ],
  [1]
)
