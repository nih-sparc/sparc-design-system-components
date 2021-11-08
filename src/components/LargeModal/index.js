import LargeModal from './src/LargeModal';

/* istanbul ignore next */
LargeModal.install = function(Vue) {
  Vue.component(LargeModal.name, LargeModal);
};

export default LargeModal;
