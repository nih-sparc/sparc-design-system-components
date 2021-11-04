import IconCard from '@/components/IconCard/src/IconCard.vue'
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-vue-router';

export default {
  title: 'Components/IconCard',
  decorators: [withKnobs, StoryRouter()],
  includeStories: []
}

const createDemo = (iconData) => {
  return {
    components: { IconCard },
    data() {
      return {
        title: iconData.title,
        icons: iconData.icons,
      }
    },
    template: `
      <icon-card
        :title="title"
        :icons="icons"
      />
    `
  }
}

export const IconCardDemo = () => createDemo(
  {
    title: 'Browse Data by Category',
    icons: [{
      title: 'Bladder',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/bladder'
    },
    {
      title: 'Colon',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/colon'
    },
    {
      title: 'Esophogus',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/esophogus'
    },
    {
      title: 'Female Reproductive System',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/female-reproductive-system'
    },
    {
      title: 'Heart',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/heart'
    },
    {
      title: 'Kidney',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/kidney'
    },
    {
      title: 'Liver',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/liver'
    },
    {
      title: 'Lungs',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/lungs'
    },
    {
      title: 'Male Reproductive System',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/male-reproductive-system'
    },
    {
      title: 'Small Intestine',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/small-intestine'
    },
    {
      title: 'Spleen',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/spleen'
    },
    {
      title: 'Stomach',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      url: '/stomach'
    }]
  }
)
