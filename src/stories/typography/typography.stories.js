import TypographyDemo from './TypographyDemo'

import { headings } from './typography'

export default {
  title: 'Components/Typography',
  decorators: [],
  includeStories: []
}

export const Headings = () => ({
  data: () => { return { headings } },
  components: { TypographyDemo },
  template: `
    <div>
      <typography-demo
        v-for="item in headings"
        :key="item.name"
        class="mb-24"
        :typography="item"
      />
    </div>
  `
})
