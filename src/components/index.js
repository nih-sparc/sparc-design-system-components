import Vue from 'vue';
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import SvgIcon from 'vue-svgicon'

import '@/assets/styles.scss';

import BreadcrumbTrail from './BreadcrumbTrail'
import ContentOverviewCard from './ContentOverviewCard'
import SparcHeader from './SparcHeader'
import TabNav from './TabNav'
import Pagination from './Pagination'
import PaginationMenu from './PaginationMenu'
import SparcRadio from './SparcRadio'
import SparcTooltip from './SparcTooltip'

import '@/assets/icons'

const Components = {
  BreadcrumbTrail,
  ContentOverviewCard,
  SparcHeader,
  TabNav,
  Pagination,
  PaginationMenu,
  SparcRadio,
  SparcTooltip
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
