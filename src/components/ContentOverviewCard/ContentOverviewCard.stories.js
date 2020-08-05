import { withKnobs, text } from '@storybook/addon-knobs';

const defaultProps = () => ({
  subtitle: {
    default: text('subtitle', 'Cardio-respiratory system: heart')
  },
  title: {
    default: text('title', 'Comprehensive structural and functional mapping of the mammalian cardiac nervous system')
  },
  description: {
    default: text('description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing')
  },
  image: {
    default: text('image', 'https://placehold.it/736')
  }
})

export default {
  title: 'Components/Content Overview Card',
  decorators: [withKnobs],
  includeStories: []
}

export const Primary = () => ({
  props: defaultProps(),
  template: `
    <div>
      <content-overview-card
        :subtitle="subtitle"
        :title="title"
        :description="description"
      >
        <img :src="image" alt="Image" slot="image" />
        <div slot="meta">
          <el-button>
            View on NIH Reporter
          </el-button>
        </div>
      </content-overview-card>
    </div>
  `
})

export const Minimal = () => ({
  props: defaultProps(),
  template: `
    <div>
      <content-overview-card
        :title="title"
        :description="description"
      >
        <img :src="image" alt="Image" slot="image" />
      </content-overview-card>
    </div>
  `
})
