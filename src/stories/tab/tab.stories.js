import ContentTabCard from '@/components/ContentTabCard/src/ContentTabCard.vue'

export default {
  title: 'Components/Tab',
  includeStories: []
}

const createDemo = (tabItem) => {
  return {
    components: { ContentTabCard },
    data() {
      return {
        tabs: tabItem.tabs,
        activeTabId: tabItem.activeTabId,
        style: tabItem.styleClass
      }
    },
    methods: {
      tabChanged(newTab) {
        this.activeTabId = newTab.id
      }
    },
    template: `
      <content-tab-card
        :tabs="tabs"
        :active-tab-id="activeTabId"
        :tab-style="style"
        @tab-changed="tabChanged"
      />
    `
  }
}

export const TabStyleOne = () => createDemo(
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

export const TabStyleTwo = () => createDemo(
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

export const TabStyleThree = () => createDemo(
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
    styleClass: 'style3'
  }
)
