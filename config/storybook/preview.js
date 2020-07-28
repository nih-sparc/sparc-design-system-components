import { configure } from '@storybook/vue';

import Vue from 'vue';

import SparcComponentLibrary from '../../src/components/index.js'

Vue.use(SparcComponentLibrary)

configure(require.context('../../src', true, /\.stories\.js$/), module);
