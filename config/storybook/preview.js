import { addParameters, configure } from '@storybook/vue';

import sparcTheme from './sparcTheme';

addParameters({
  options: {
    theme: sparcTheme,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});


import Vue from 'vue';

import SparcComponentLibrary from '../../src/components/index.js';

Vue.use(SparcComponentLibrary);

configure(require.context('../../src', true, /\.stories\.js$/), module);
