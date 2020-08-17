import { addParameters, configure } from '@storybook/vue';

import sparcTheme from './sparcTheme';

const viewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      height: '812px',
      width: '375px'
    },
    type: 'mobile'
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1024px',
      width: '768px'
    },
    type: 'tablet'
  },
  desktop: {
    name: 'Desktop',
    styles: {
      height: '800px',
      width: '1280px'
    },
    type: 'desktop'
  },
  largeDisplay: {
    name: 'Large Display',
    styles: {
      height: '1080px',
      width: '1920px'
    },
    type: 'desktop'
  },
};

addParameters({
  options: {
    theme: sparcTheme,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  viewport: {
    viewports
  },
  docs: {
    components: {
      table: null,
    },
  }
});


import Vue from 'vue';

import SparcComponentLibrary from '../../src/components/index.js';

Vue.use(SparcComponentLibrary);

configure(require.context('../../src', true, /\.stories\.js$/), module);
