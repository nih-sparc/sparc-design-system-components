<template>
  <div id="app">
    <SparcHeader linkComponent="router-link" :currentPath="$route.name"/>
    <div class="content-body">
      <el-button>hi</el-button>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day">
      </el-date-picker>
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <about-tab
        :tabs="tabs"
        :active-tab="activeTab"
        @tab-changed="activeTab = $event"
      />
      <about-tab
        class="style2"
        :tabs="tabs"
        :active-tab="activeTab"
        @tab-changed="activeTab = $event"
      />
      <el-button
        plain
        @click="openSuccessMessage">
        Show Success Notification
      </el-button>
      <el-button
        plain
        @click="openFailMessage">
        Show Failure Notification
      </el-button>
      <el-button
        plain
        @click="openNotification">
        Show Notification
      </el-button>
      <el-button
        plain
        @click="openNotificationWithIcon">
        Show Notification with Icon
      </el-button>
      <div style="margin-top: 1rem;">
        <large-modal
          :visible="dialogVisible"
          @close-download-dialog="dialogVisible = false"
        >
          <div slot="optionalContent">
            <h1>Direct download</h1>
            <div>
              <p>You can download the raw files and metadata directly to your computer as a zip archive free of charge.</p>
              <p class="download-container__download-dataset-size">
                Dataset Size: 17.43 GB
              </p>
              <el-button class="download-button">Download</el-button>
            </div>
          </div>
          <div slot="mainContent">
            <h1>Download from AWS</h1>
            <p>
              Raw files and metadata are stored in an AWS S3 Requester Pays bucket.
              You can learn more about downloading data from AWS on our
              <a href="/#" target="_blank">Help Page</a>.
            </p>
            <div>
              <p>*Requester pays means that any costs associated with downloading the data will be charged to your AWS account.
                For transfer pricing information, visit the <a href="https://aws.amazon.com/s3/pricing/" target="blank">AWS Pricing documentation.</a>
              </p>
              <div>
              <el-button class="secondary" @click="dialogVisible = false">
                Close
              </el-button>
              </div>
            </div>
          </div>
        </large-modal>
      </div>
      <el-button
        plain
        @click="dialogVisible = true">
        Open Large Modal
      </el-button>
      <el-popover
        class="popover"
        placement="top-start"
        trigger="click" 
      >
        <div>
          <p>Phrenic Nerve</p>
          <p><b>COMPONENTS</b></p>
          <p>Non-autonomic peripheral</p>
          <div style="margin-bottom: 5px;">
            <el-button class="extra-small">View Source</el-button>
          </div>
          <div>
            <el-button class="extra-small">Explore Data</el-button>
          </div>
        </div>
        <el-button slot="reference">Hover to activate</el-button>
      </el-popover>
      <pagination
        :total-count="pageCount"
        :selected="3"
        @select-page="onPaginationChange"
      />
      <pagination-menu 
        :page-size="pageSize"
        @update-page-size="updatePageSize"
      />
      <div class="radio-group">
        <sparc-radio
          v-for="item in radioData"
          v-bind:key="item.label"
          v-model="radioVal"
          :label="item.label"
          :disabled="item.disabled || false"
          :display="item.display"
        />
      </div>
      <div class="checkbox-group">
        <sparc-checkbox
          v-for="item in checkboxData"
          v-bind:key="item.label"
          v-model="checkboxVals"
          :label="item.label"
          :disabled="item.disabled || false"
          :display="item.display"
        />
      </div>
      <div class="tooltip">
        <sparc-tooltip v-for="dir in tooltipDirs" :key="dir" :placement="dir">
          <div slot="data">{{ dir }}<br/>THIS IS <a href="#">ALOT</a> OF TEXT</div>
          <el-button slot="item">{{ dir }}</el-button>
        </sparc-tooltip>
      </div>
      <el-row type="flex" justify="center">
        <el-select
          v-model="selectVal"
          placeholder="Select"
        >
          <el-option-group
            v-for="group in selectOpts"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </el-row>
      <multi-select
        :options="multiLevelSelectOptions"
      />
      <multi-select
        :options="singleLevelSelectOptions"
      />
      <el-col class="dropdown-multiselect">
        <el-row>
          <dropdown-multiselect
            :category="oneOptionsDropdownMultiselectCategory"  
          />
        </el-row>
        <el-row>
          <dropdown-multiselect
            :category="twoOptionsDropdownMultiselectCategory"  
            :tooltip="dropdownMultiselectTooltip"
          />
        </el-row>
        <el-row>
          <dropdown-multiselect
            :category="nineOptionsDropdownMultiselectCategory" 
          />
        </el-row>
        <el-row>
          <dropdown-multiselect
            :category="fifteenOptionsDropdownMultiselectCategory" 
          />
        </el-row>
        <el-row>
          <dropdown-multiselect
            :category="multiLevelDropdownMultiselectCategory" 
          />
        </el-row>
      </el-col>
      <el-col>
        <el-row class="event-card-row">
          <el-col>
            <event-card
              :eventType="eventCardEvent.type"
              :eventImage="eventCardEvent.image"
              :title="eventCardEvent.title"
              :startDate="eventCardEvent.startDate"
              :endDate="eventCardEvent.endDate"
              :location="eventCardEvent.location"
              :url="eventCardEvent.url"
            />
          </el-col>
          <el-col>
            <event-card
              :eventType="eventCardEvent.type"
              :eventImage="eventCardEvent.image"
              :title="eventCardEvent.title"
              :startDate="eventCardEvent.startDate"
              :endDate="eventCardEvent.endDate"
              :location="eventCardEvent.location"
              :url="eventCardEvent.url"
            />
          </el-col>
          <el-col>
            <event-card
              :eventType="eventCardEvent.type"
              :eventImage="eventCardEvent.image"
              :title="eventCardEvent.title"
              :startDate="eventCardEvent.startDate"
              :endDate="eventCardEvent.endDate"
              :location="eventCardEvent.location"
              :url="eventCardEvent.url"
            />
          </el-col>
          <el-col>
            <event-card
              :eventType="eventCardEvent.type"
              :eventImage="eventCardEvent.image"
              :title="eventCardEvent.title"
              :startDate="eventCardEvent.startDate"
              :endDate="eventCardEvent.endDate"
              :location="eventCardEvent.location"
              :url="eventCardEvent.url"
            />
          </el-col>
        </el-row>
      </el-col>
      <el-col>
        <el-row style="margin: 2rem 2rem">
          <list-card
            :data="listCardDataStyleOne"
          />
        </el-row>
        <el-row style="margin: 2rem 2rem">
          <list-card
            :data="listCardDataStyleTwo.data"
            :sectionText="listCardDataStyleTwo.text"
            :sectionUrl="listCardDataStyleTwo.url"
          />
        </el-row>
      </el-col>
      <el-col>
        <el-row>
          <content-overview-card
            :subtitle="contentOverviewCard.subtitle"
            :title="contentOverviewCard.title"
            :description="contentOverviewCard.description"
            :image="contentOverviewCard.image"
          >
            <div
              v-for="property in contentOverviewCard.metadata"
              slot="metadata"
              class="metadata-content"
              :key="property.title"
            >
              <div class="metadata-title">
                {{property.title}}
              </div>
              <div>
                {{property.value}}
              </div>
            </div>
            <div slot="buttons">
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
        </el-row>
      </el-col>
      <el-col>
        <el-row>
          <content-tab-card
            :tabs="contentTabCard.tabs"
            :default-tab="contentTabCard.tabs[0].type"
            linkComponent="router-link"
            @tab-changed="tabChanged"
          >
            <div
              v-for="tab in contentTabCard.tabs"
              :key="tab.type"
            >
              <div
                v-show="contentTabCard.activeTab === tab.type" 
              >
                Content for {{tab.label}} goes here!
              </div>
            </div>
          </content-tab-card>
        </el-row>
      </el-col>
    </div>
  </div>
</template>

<script>
import { successMessage, failMessage, informationNotification, iconInformationNotification } from "../utils/notificationMessages"

export default {
  name: 'App',

  data() {
    return {
      value1: '',
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      value: '',
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
      pageSize: 10,
      pageCount: 100,
      radioData: [
        {
          label: 1,
          display: "one"
        },
        {
          label: 2,
          display: "two",
          disabled: true
        },
        {
          label: 3,
          display: "three"
        },
        {
          label: 4,
          display: "four"
        },
        {
          label: 5,
          display: "five"
        }
      ],
      checkboxData: [
        {
          label: 1,
          display: "one"
        },
        {
          label: 2,
          display: "two",
          disabled: true
        },
        {
          label: 3,
          display: "three"
        },
        {
          label: 4,
          display: "four"
        },
        {
          label: 5,
          display: "five"
        }
      ],
      dialogVisible: false,
      radioVal: '',
      checkboxVals: [],
      tooltipDirs: [
        'top-left',
        'top-center',
        'top-right',
        'left-top',
        'left-center',
        'left-bottom',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'right-top',
        'right-center',
        'right-bottom'
      ],
      selectVal: [],
      selectOpts: [
        {
          label: 'Group 1',
          options: [
            {
              value: 'Option1',
              label: 'Option 1'
            },
            {
              value: 'Option2',
              label: 'Option 2'
            },
          ]
        },
        {
          label: 'Group 2',
          options: [
            {
              value: 'Option3',
              label: 'Option 3'
            },
            {
              value: 'Option4',
              label: 'Option 4'
            },
          ]
        },
      ],
      multiLevelSelectOptions: [{
        value: 1,
        label: 'Asia',
        children: [{
          value: 2,
          label: 'China',
        }, {
          value: 6,
          label: 'Japan',
        }, {
          value: 10,
          label: 'Korea',
        }]
      }, {
        value: 14,
        label: 'Europe',
        children: [{
          value: 15,
          label: 'France'
        }, {
          value: 19,
          label: 'UK',
        }]
      }, {
        value: 23,
        label: 'North America',
        children: [{
          value: 24,
          label: 'US'
        }, {
          value: 25,
          label: 'Canada'
        }]
      }],
      singleLevelSelectOptions: [{
        value: 1,
        label: 'Asia',
      }, {
        value: 14,
        label: 'Europe',
      }, {
        value: 23,
        label: 'North America',
      }],
      dropdownMultiselectTooltip: "This is a very long test<br/>tooltip for the dropdown<br/>multiselect component.",
      oneOptionsDropdownMultiselectCategory: {
        label: 'One Option',
        id: '0',
        data: [
        {
          label: 'One',
          id: '1',
        }]
      },
      twoOptionsDropdownMultiselectCategory: {
        label: 'Two Options',
        id: '0',
        data: [
        {
          label: 'One',
          id: '1',
        },
        {
          label: 'Two',
          id: '2',
        }]
      },
      nineOptionsDropdownMultiselectCategory: {
        label: 'Nine Options',
        id: '0',
        data: [
        {
          label: 'One',
          id: '1',
        },
        {
          label: 'Two',
          id: '2',
        },
        {
          label: 'Three',
          id: '3',
        },
        {
          label: 'Four',
          id: '4',
        },
        {
          label: 'Five',
          id: '5',
        },
        {
          label: 'Six',
          id: '6',
        },
        {
          label: 'Seven',
          id: '7',
        },
        {
          label: 'Eight',
          id: '8',
        },
        {
          label: 'Nine',
          id: '9',
        }]
      },
      multiLevelDropdownMultiselectCategory: {
        label: 'Multi-Level',
        id: '0',
        data: [
        {
          label: 'One',
          id: '1',
          children: [
          {
            label: 'Child One',
            id: '6',
          },
          {
            label: 'Child Two',
            id: '7',
          },
          {
            label: 'Child Three',
            id: '8',
          }]
        },
        {
          label: 'Two',
          id: '2',
        },
        {
          label: 'Three',
          id: '3',
          children: [
          {
            label: 'Child One',
            id: '9',
          },
          {
            label: 'Child Two',
            id: '10',
          },
          {
            label: 'Child Three',
            id: '11',
          },
          {
            label: 'Child Four',
            id: '12',
          },
          {
            label: 'Child Five',
            id: '13',
          },
          {
            label: 'Child Six',
            id: '14',
          },
          {
            label: 'Child Seven',
            id: '15',
          },
          {
            label: 'Child Eight',
            id: '16',
          },
          {
            label: 'Child Nine',
            id: '17',
          }]
        },
        {
          label: 'Four',
          id: '4',
        },
        {
          label: 'Five',
          id: '5',
        }]
      },
      fifteenOptionsDropdownMultiselectCategory: {
        label: 'Fifteen Options',
        id: '0',
        data: [
        {
          label: 'One',
          id: '1',
        },
        {
          label: 'Two',
          id: '2',
        },
        {
          label: 'Three',
          id: '3',
        },
        {
          label: 'Four',
          id: '4',
        },
        {
          label: 'Five',
          id: '5',
        },
        {
          label: 'Six',
          id: '6',
        },
        {
          label: 'Seven',
          id: '7',
        },
        {
          label: 'Eight',
          id: '8',
        },
        {
          label: 'Nine',
          id: '9',
        },
        {
          label: 'Ten',
          id: '10'
        },
        {
          label: 'Eleven',
          id: '11',
        },
        {
          label: 'Twelve',
          id: '12',
        },
        {
          label: 'Thirteen',
          id: '13',
        },
        {
          label: 'Fourteen',
          id: '14',
        },
        {
          label: 'Fifteen',
          id: '15'
        }]
      },
      eventCardEvent: {
        type: "Conference",
        image: "https://via.placeholder.com/736",
        title: "SPARC and Experimental Biology (EB)",
        startDate: "2020-04-04T10:36:01.516Z",
        endDate:"2020-04-07T10:36:01.516Z",
        location: "San Diego, California",
        url: "/#"
      },
      listCardDataStyleOne: [
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
        },
        {
          title: "Prototype simulation of undiseased human cardiac ventricular cells",
          summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
          date: "2020-04-04T10:36:01.516Z",
          url: "/#",
          image: "https://via.placeholder.com/128"
        }
      ],
      listCardDataStyleTwo: {
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
        text: "Show all News",
        url: "/#"
      },
      contentOverviewCard: {
        subtitle: 'Cardio-respiratory system: heart',
        title: 'Comprehensive structural and functional mapping of the mammalian cardiac nervous system',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing',
        image: 'https://via.placeholder.com/736',
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
        }],
      },
      contentTabCard: {
        tabs: [{
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
        }],
        activeTab: "Team Information"
      },
    }
  },
  methods: {
    onPaginationChange: function(page) {
      console.log("page: " + page)
    },
    updatePageSize: function(limit) {
      this.pageSize = limit === 'View All' ?  100 : limit
      this.pageCount = limit === 'View All' ?  100 : limit
    },
    tabChanged(newTabType) {
      this.contentTabCard.activeTab = newTabType
    },
    openSuccessMessage() {
      this.$message(successMessage(`Success!`))
    },
    openFailMessage() {
      this.$message(failMessage(`Failure.`))
    },
    openNotification() {
      this.$notify(informationNotification('Notification Title', 'This is a notification.'))
    },
    openNotificationWithIcon() {
      this.$notify(iconInformationNotification('Notification Title', 'This is a notification with an icon.'))
    }
  }
}
</script>

<style lang="scss">
.content-body {
  padding-top: 1em;
}
.radio-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-top: 10px;
}
.checkbox-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-top: 10px;
}
.tooltip {
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}
.dropdown-multiselect {
  width: 14rem !important;
  .el-row:not(:last-child) .dropdown-multiselect-border {
    border-bottom: none !important;
  }
}
.event-card-row {
  .el-col {
    width: 100%;
    @media (min-width: 48em) {
      width: 50%;
    }
    @media (min-width: 64em) {
      width: 25%;
    }
  }
}
.metadata-content {
  margin-right: 2rem;
  margin-bottom: 1rem;
}
.metadata-title {
  font-weight: 500;
}
</style>