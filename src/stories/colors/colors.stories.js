import './colors-demo-styles.scss';
import ColorDemo from './ColorDemo.vue'
import ColorUsage from './ColorUsage.vue'

import { primary, secondary, status, text, line, background } from './colors'

export default {
  title: 'Components/Colors',
  includeStories: []
}

const createDemo = (colors) => {
  return {
    components: {
      ColorDemo,
      ColorUsage
    },
    data() {
      return {
        colors
      }
    },
    template: `
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
  }
}

export const Basic = () => createDemo(primary)

export const Secondary = () => createDemo(secondary)

export const Status = () => createDemo(status)

export const Text = () => createDemo(text)

export const Line = () => createDemo(line)

export const Background = () => createDemo(background)
