import ContentOverviewCard from '@/components/ContentOverviewCard/src/ContentOverviewCard.vue'

export default {
  title: 'Components/ContentOverviewCard',
  includeStories: []
}

const createDemo = (content) => {
  return {
    components: { ContentOverviewCard },
    data() {
      return {
        title: content.title,
        subtitle: content.subtitle,
        description: content.description,
        image: content.image,
        metadata: content.metadata
      }
    },
    template: `
      <content-overview-card
        :subtitle="subtitle"
        :title="title"
        :description="description"
        :image="image"
        :metadata="metadata"
      >
        <div slot="button">
          <a
            href="/#"
            target="_blank"
          >
            <el-button>
              View on NIH Reporter
            </el-button>
          </a>
        </div>
      </content-overview-card>
    `
  }
}

export const Primary = () => createDemo({
  title: "Comprehensive structural and functional mapping of the mammalian cardiac nervous system",
  subtitle: "Cardio-respiratory system: heart",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing",
  image: "https://via.placeholder.com/736",
  metadata: [{
    title: 'NIH Award',
      value: '000000000000'
    },
    {
      title: 'Principal Investigator',
      value: 'Fynn Blackwell'
    },
    {
      title: 'Institution',
      value: 'University of California Los Angeles'
    }
  ]
})
