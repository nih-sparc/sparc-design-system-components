import Vue from 'vue';
import ElementUI from 'element-ui';

import '@/assets/styles.scss';

import ContentOverviewCard from './ContentOverviewCard'
import TabNav from './TabNav'
import BreadcrumbTrail from './BreadcrumbTrail'

const Components = {
  ContentOverviewCard,
  TabNav,
  BreadcrumbTrail
}

Object.keys(Components).forEach(component => {
  Vue.component(component, Components[component]);
})

ElementUI.install(Vue)

export default {
  ElementUI,
  ...Components
}
