import { addParameters, configure } from '@storybook/vue';

import sparcTheme from './sparcTheme';

addParameters({
  options: {
    theme: sparcTheme
  },
});


import Vue from 'vue';

import SparcComponentLibrary from '../../src/components/index.js';

Vue.use(SparcComponentLibrary);

configure(require.context('../../src', true, /\.stories\.js$/), module);
