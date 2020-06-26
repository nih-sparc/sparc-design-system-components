import Vue from 'vue';
import ElementUI from 'element-ui';

import '@/assets/styles.scss';

import TabNav from './TabNav'

const Components = {
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
