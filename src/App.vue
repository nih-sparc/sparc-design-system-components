<template>
  <div id="app">
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
      ]
    }
  }
}
</script>

<style>
</style>
