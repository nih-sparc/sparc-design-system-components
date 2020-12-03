import './colors-demo-styles.scss';
import ColorDemo from './ColorDemo.vue'
import ColorUsage from './ColorUsage.vue'

import { primary, secondary, status } from './colors'

const colorsTemplate = `
<div>
  <div class="bx--grid">
    <div class="bx--row mb-32">
      <color-demo
        v-for="color in colors"
        :key="color.name"
        class="bx--col"
        :name="color.name"
        :hex="color.hex"
        :rbg="color.rbg"
        :cmyk="color.cmyk"
      />
    </div>

    <div class="bx--row">
      <div class="bx--col">
        <color-usage
          v-for="color in colors"
          :key="color.usage"
          class="mb-8"
          :name="color.name"
          :hex="color.hex"
          :usage="color.usage"
        />
      </div>
    </div>
  </div>
</div>
`

const defaultComponents = {
  ColorDemo,
  ColorUsage
}

export default {
  title: 'Colors',
  includeStories: []
}

export const Basic = () => ({
  components: defaultComponents,
  data() {
    return {
      colors: primary
    }
  },
  template: colorsTemplate
})

export const Secondary = () => ({
  components: defaultComponents,
  data() {
    return {
      colors: secondary
    }
  },
  template: colorsTemplate
})

export const Status = () => ({
  components: defaultComponents,
  data() {
    return {
      colors: status
    }
  },
  template: colorsTemplate
})
