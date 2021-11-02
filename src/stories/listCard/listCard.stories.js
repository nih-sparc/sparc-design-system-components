import ListCard from '@/components/ListCard/src/ListCard.vue'
import './demo-styles.scss';

export default {
  title: 'Components/ListCard',
  includeStories: []
}

const createDemo = (listCardItem) => {
  return {
    components: { ListCard },
    data() {
      return {
        data: listCardItem.data,
        text: listCardItem.text,
        url: listCardItem.url
      }
    },
    template: `
      <el-row class="list-card-container">
        <list-card
          :data="data"
          :section-text="text"
          :section-url="url"
        />
      </el-row>
    `
  }
}

export const ListCardStyleOne = () => createDemo(
  {
    data: [{
      title: "Prototype simulation of undiseased human cardiac ventricular cells",
      summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
      date: "2020-04-04T10:36:01.516Z",
      url: "/#",
      image: "https://via.placeholder.com/128"
    },
    {
      title: "Prototype simulation of undiseased human cardiac ventricular cells",
      summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
      date: "2020-04-04T10:36:01.516Z",
      url: "/#",
      image: "https://via.placeholder.com/128"
    },
    {
      title: "Prototype simulation of undiseased human cardiac ventricular cells",
      summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
      date: "2020-04-04T10:36:01.516Z",
      url: "/#",
      image: "https://via.placeholder.com/128"
    }]
  }
)

export const ListCardStyleTwo = () => createDemo(
  {
    data: [{
      title: "Prototype simulation of undiseased human cardiac ventricular cells",
      summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
      date: "2020-04-04T10:36:01.516Z",
      url: "/#"
    },
    {
      title: "Prototype simulation of undiseased human cardiac ventricular cells",
      summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
      date: "2020-04-04T10:36:01.516Z",
      url: "/#"
    },
    {
      title: "Prototype simulation of undiseased human cardiac ventricular cells",
      summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
      date: "2020-04-04T10:36:01.516Z",
      url: "/#"
    }],
    text: "Show all News >",
    url: "/#"
  }
)
