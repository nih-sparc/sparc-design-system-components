import './colors-demo-styles.scss';
import ColorDemo from './ColorDemo.vue'
import ColorUsage from './ColorUsage.vue'

import { primary } from './colors'

export default {
  title: 'Colors',
  includeStories: []
}

export const Basic = () => ({
  components: {
    ColorDemo,
    ColorUsage
  },
  data() {
    return {
      colors: primary
    }
  },
  template: `
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
})
