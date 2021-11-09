import AboutTab from '@/components/AboutTab/src/AboutTab.vue'

export default {
  title: 'Components/AboutTab',
  includeStories: []
}

const createDemo = (aboutTabItem) => {
  return {
    components: { AboutTab },
    data() {
      return {
        tabs: aboutTabItem.tabs,
        activeTab: aboutTabItem.activeTab,
        style: aboutTabItem.styleClass
      }
    },
    template: `
      <about-tab
        :class="style"
        :tabs="tabs"
        :active-tab="activeTab"
        @tab-changed="activeTab = $event"
      />
    `
  }
}

export const AboutTabStyleOne = () => createDemo(
  {
    activeTab: 'organs',
    tabs: [
      {
        label: 'Datasets',
        id: 'datasets'
      },
      {
        label: 'Organs',
        id: 'organs'
      },
      {
        label: 'Images',
        id: 'images'
      },
      {
        label: 'Projects',
        id: 'projects'
      },
      {
        label: 'Simulations',
        id: 'simulations'
      }
    ]
  }
)

export const AboutTabStyleTwo = () => createDemo(
  {
    activeTab: 'organs',
    tabs: [
      {
        label: 'Datasets',
        id: 'datasets'
      },
      {
        label: 'Organs',
        id: 'organs'
      },
      {
        label: 'Images',
        id: 'images'
      },
      {
        label: 'Projects',
        id: 'projects'
      },
      {
        label: 'Simulations',
        id: 'simulations'
      }
    ],
    styleClass: 'style2'
  }
)
