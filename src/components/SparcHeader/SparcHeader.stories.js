import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-vue-router';


const defaultProps = () => ({
  currentPath: { default: "/" },
})

export default {
  title: 'Large Components/Sparc Header',
  decorators: [withKnobs, StoryRouter()],
  includeStories: []
}

export const Primary = () => ({
  props: defaultProps(),
  template: `
    <div>
      <SparcHeader 
        linkComponent="router-link" 
        :currentPath="$route.name"/>
    </div>
  `
})

