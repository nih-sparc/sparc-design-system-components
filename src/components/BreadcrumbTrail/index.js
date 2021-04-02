import BreadcrumbTrail from './src/BreadcrumbTrail';

/* istanbul ignore next */
BreadcrumbTrail.install = function(Vue) {
  Vue.component(BreadcrumbTrail.name, BreadcrumbTrail);
};

export default BreadcrumbTrail;
