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

      <div style="background: #292b66; padding: 2em;">
        <tab-nav
          class="style2"
          :tabs="tabs"
          :active-tab="activeTab"
          @set-active-tab="activeTab = $event"
        />
      </div>
      <tab-nav
        :tabs="tabs"
        :active-tab="activeTab"
        @set-active-tab="activeTab = $event"
      />
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
    </div>
  </div>
</template>

<script>
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
      activeTab: 'upcoming',
      tabs: [
        {
          label: 'Upcoming',
          type: 'upcoming'
        },
        {
          label: 'Past',
          type: 'past'
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
      radioVal: '',
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
      ]
    }
  },
  methods: {
    onPaginationChange: function(page) {
      console.log("page: " + page)
    },
    updatePageSize: function(limit) {
      this.pageSize = limit === 'View All' ?  100 : limit
      this.pageCount = limit === 'View All' ?  100 : limit
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
.tooltip {
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
