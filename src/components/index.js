import Vue from 'vue';
import ElementUI from 'element-ui';

import '@/assets/styles.scss';

import ContentOverviewCard from './ContentOverviewCard'
import TabNav from './TabNav'

const Components = {
  ContentOverviewCard,
  TabNav
}

Object.keys(Components).forEach(component => {
  Vue.component(component, Components[component]);
})

ElementUI.install(Vue)

export default {
  ElementUI,
  ...Components
}
