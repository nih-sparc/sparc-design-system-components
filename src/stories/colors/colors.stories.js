import './colors-demo-styles.scss';
import ColorDemo from './ColorDemo.vue'
import ColorUsage from './ColorUsage.vue'

import { primary, secondary, status, text, line, background } from './colors'

const colorsTemplate = `
<div>
  <div class="bx--grid">
    <div class="bx--row mb-32">
      <color-demo
        v-for="color in colors"
        :key="color.hex"
        class="bx--col"
        :color="color"
      />
    </div>

    <div class="bx--row">
      <div class="bx--col">
        <color-usage
          v-for="color in colors"
          :key="color.usage+color.hex"
          class="mb-8"
          :color="color"
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

export const Text = () => ({
  components: defaultComponents,
  data() {
    return {
      colors: text
    }
  },
  template: colorsTemplate
})

export const Line = () => ({
  components: defaultComponents,
  data() {
    return {
      colors: line
    }
  },
  template: colorsTemplate
})

export const Background = () => ({
  components: defaultComponents,
  data() {
    return {
      colors: background
    }
  },
  template: colorsTemplate
})
