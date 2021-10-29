import DropdownMultiselect from './src/DropdownMultiselect';

/* istanbul ignore next */
DropdownMultiselect.install = function(Vue) {
  Vue.component(DropdownMultiselect.name, DropdownMultiselect);
};

export default DropdownMultiselect;