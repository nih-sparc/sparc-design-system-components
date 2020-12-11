import TypographyDemo from './TypographyDemo'

import * as typography from './typography'

import FontsDemo from './FontsDemo'

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
export const Fonts = () => ({
  components: {
    FontsDemo
  },
  template: `
    <div>
      <fonts-demo />
    </div>
  `
})

export const Headings = () => createDemo(typography.headings)

export const Navigation = () => createDemo(typography.navigation)

export const Body = () => createDemo(typography.body)

export const Labels = () => createDemo(typography.labels)

export const Tabs = () => createDemo(typography.tabs)

export const LinksDefault = () => createDemo(typography.linksDefault)

export const LinksHover = () => createDemo(typography.linksHover)
