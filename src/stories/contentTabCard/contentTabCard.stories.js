import ContentTabCard from '@/components/ContentTabCard/src/ContentTabCard.vue'

export default {
  title: 'Components/ContentTabCard',
  includeStories: []
}

const createDemo = (contentTabCardItem) => {
  return {
    components: { ContentTabCard },
    data() {
      return {
        tabs: contentTabCardItem.tabs,
        activeTabId: contentTabCardItem.tabs[0].id
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
        @tab-changed="tabChanged"
      >
        <div
          v-for="tab in tabs"
          :key="tab.id"
        >
          <div
            v-show="activeTabId === tab.id" 
          >
            Content for {{tab.label}} goes here!
          </div>
        </div>
      </content-tab-card>
    `
  }
}

export const Primary = () => createDemo(
  {
    tabs: [{
      label: 'Team Information', 
      id: 'Team Information'
    },
    {
      label: 'Diseases', 
      id: 'Diseases'
    },
    {
      label: 'Datasets', 
      id: 'Datasets',
      href: '/#'
    }]
  }
)
