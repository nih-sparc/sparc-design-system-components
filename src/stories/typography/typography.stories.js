import TypographyDemo from './TypographyDemo'

import { headings, navigation } from './typography'

export default {
  title: 'Components/Typography',
  decorators: [],
  includeStories: []
}

const createDemo = (typography) => {
  return {
    components: {
      TypographyDemo
    },
    data() {
      return {
        typography
      }
    },
    template: `
      <div>
        <typography-demo
          v-for="item in typography"
          :key="item.name"
          class="mb-24"
          :typography="item"
        />
      </div>
    `
  }
}

export const Headings = () => createDemo(headings)

export const Navigation = () => createDemo(navigation)
