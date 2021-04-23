import Vue from 'vue';
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import SvgIcon from 'vue-svgicon'

import '@/assets/styles.scss';

import ContentOverviewCard from './ContentOverviewCard'
import TabNav from './TabNav'
import BreadcrumbTrail from './BreadcrumbTrail'

import '@/assets/icons'

const Components = {
  ContentOverviewCard,
  TabNav,
  BreadcrumbTrail
}

Object.keys(Components).forEach(component => {
  Vue.component(component, Components[component]);
})

locale.use(lang)

ElementUI.install(Vue)

Vue.use(SvgIcon, {
  defaultWidth: '1rem',
  defaultHeight: '1rem'
})

export default {
  ElementUI,
  ...Components
}
