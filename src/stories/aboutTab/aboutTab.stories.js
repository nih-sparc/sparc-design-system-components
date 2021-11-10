import ContentTabCard from '@/components/ContentTabCard/src/ContentTabCard.vue'

export default {
  title: 'Components/AboutTab',
  includeStories: []
}

const createDemo = (aboutTabItem) => {
  return {
    components: { ContentTabCard },
    data() {
      return {
        tabs: aboutTabItem.tabs,
        activeTabId: aboutTabItem.activeTabId,
        style: aboutTabItem.styleClass
      }
    },
    methods: {
      tabChanged(newTab) {
        this.activeTabId = newTab.id
      }
    },
    template: `
      <content-tab-card
        :class="style"
        :tabs="tabs"
        :active-tab-id="activeTabId"
        @tab-changed="tabChanged"
      />
    `
  }
}

export const AboutTabStyleOne = () => createDemo(
  {
    activeTabId: 'organs',
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
    activeTabId: 'organs',
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
