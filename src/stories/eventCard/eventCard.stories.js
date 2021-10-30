import EventCard from '@/components/EventCard/src/EventCard.vue'
import './demo-styles.scss';

export default {
  title: 'Components/EventCard',
  includeStories: []
}

const createDemo = (event) => {
  return {
    components: { EventCard },
    data() {
      return {
        type: event.type,
        image: event.image,
        title: event.title,
        startDate: event.startDate,
        endDate: event.endDate,
        location: event.location,
        url: event.url
      }
    },
    template: `
      <el-row class="event-card-row">
        <el-col>
          <event-card
            :eventType="type"
            :eventImage="image"
            :title="title"
            :startDate="startDate"
            :endDate="endDate"
            :location="location"
            :url="url"
          />
        </el-col>
        <el-col>
          <event-card
            :eventImage="image"
            :title="title"
            :startDate="startDate"
            :endDate="endDate"
            :location="location"
            :url="url"
          />
        </el-col>
        <el-col>
          <event-card
            :eventType="type"
            :eventImage="image"
            :title="title"
            :startDate="startDate"
            :location="location"
            :url="url"
          />
        </el-col>
        <el-col>
          <event-card
            :eventType="type"
            :eventImage="image"
            :title="title"
            :startDate="startDate"
            :endDate="endDate"
            :location="location"
          />
        </el-col>
      </el-row>
    `
  }
}

export const Testing = () => createDemo(
  {
    type: "Conference",
    image: "https://via.placeholder.com/736",
    title: "SPARC and Experimental Biology (EB)",
    startDate: "2020-04-04T10:36:01.516Z",
    endDate:"2020-04-07T10:36:01.516Z",
    location: "San Diego, California",
    url: "/#"
  }
)
