import SparcRadio from './src/SparcRadio';

/* istanbul ignore next */
SparcRadio.install = function(Vue) {
  Vue.component(SparcRadio.name, SparcRadio);
};

export default SparcRadio;
