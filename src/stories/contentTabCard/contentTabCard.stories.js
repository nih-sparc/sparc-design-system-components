import ContentTabCard from '@/components/ContentTabCard/src/ContentTabCard.vue'
import StoryRouter from 'storybook-vue-router';
import './demo-styles.scss';

storiesOf('App', module)
 .addDecorator(StoryRouter({}, router.options))
 .add('app', () => ({
     render: h => h(App)
 }));

const createDemo = (tabs) => {
  return {
    components: { ContentTabCard },
    data() {
      return {
        tabs: tabs,
        defaultTab: tabs[0].type,
        activeTab: ''
      }
    },
    methods: {
      tabChanged(newTabType) {
        this.activeTab = newTabType
      }
    },
    template: `
      <content-tab-card
        :tabs="tabs"
        :default-tab="defaultTab"
        linkComponent="router-link"
        @tab-changed="tabChanged"
      >
        <div
          v-for="tab in tabs"
          :key="tab.type"
        >
          <div
            v-show="activeTab === tab.type" 
          >
            Content for {{tab.label}} goes here!
          </div>
        </div>
      </content-tab-card>
    `
  }
}

export const ContentTabCardDemo = () => createDemo(
  [{
    label: 'Team Information', 
    type: 'Team Information'
  },
  {
    label: 'Diseases', 
    type: 'Diseases'
  },
  {
    label: 'Datasets', 
    type: 'Datasets'
  }]
)
