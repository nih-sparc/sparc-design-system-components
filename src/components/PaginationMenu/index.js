import PaginationMenu from './src/PaginationMenu';

/* istanbul ignore next */
PaginationMenu.install = function(Vue) {
  Vue.component(PaginationMenu.name, PaginationMenu);
};

export default PaginationMenu;
