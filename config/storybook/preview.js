import { configure, addParameters } from '@storybook/vue';

import Vue from 'vue';

import SparcComponentLibrary from '../../src/components/index.js'

Vue.use(SparcComponentLibrary)

addParameters({
  docs: {
    inlineStories: true,
  },
})

configure(require.context('../../src', true, /\.stories\.js$/), module);
