import './colors-demo-styles.scss';
import ColorDemo from './ColorDemo.vue'

import { primary } from './colors'

export default {
  title: 'Colors',
  includeStories: []
}

export const Basic = () => ({
  components: { ColorDemo },
  data() {
    return {
      colors: primary
    }
  },
  template: `
    <div>
      <color-demo
        v-for="color in colors"
        :key="color.name"
        :name="color.name"
        :hex="color.hex"
        :rbg="color.rbg"
        :cmyk="color.cmyk"
      />
    </div>
  `
})
