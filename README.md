# SPARC Design system components

![Node.js Package](https://github.com/nih-sparc/sparc-design-system-components/workflows/Node.js%20Package/badge.svg) ![Tests](https://github.com/nih-sparc/sparc-design-system-components/workflows/Tests/badge.svg) ![Storybook deploy](https://github.com/nih-sparc/sparc-design-system-components/workflows/Storybook%20deploy/badge.svg)

## About

This design system serves a variety of audiences, and will be most useful in the Abstract format (a repository for designer files) to Developers/Engineers, and then to Designers.
To make it accessible to the DRC as a whole, and to share the importance of a consistent user experience, we have added explanatory text to the majority of pages; demonstrating utility of individual components.

As development becomes shared across the Cores, we recommend each Core's engineers refer to this design system, when creating new feature/functionality which will be highlighted on Sparc.Science.

Our intention is to create an online resource with the code for these components, and to update this quarterly.

## Components

- [Element UI](https://github.com/ElemeFE/element)
- Tabs

## Installation
### With Yarn
```
yarn add @nih-sparc/sparc-design-system-components
```

### With NPM
```
npm install @nih-sparc/sparc-design-system-components
```

## Quick Start
```
import Vue from 'vue'

import SparcComponentLibrary from 'sparc-test-design-system-components'

Vue.use(SparcComponentLibrary)
```

# Development
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build-bundle
```

# Tests

## Unit tests

Utlizes [Vue Test Utils](https://vue-test-utils.vuejs.org/) and [Jest](https://jestjs.io/).

### Writing tests

It is recommended to have tests live alongside of your component. For one off tests, the `./tests/unit` folder can be uses.

### Running tests

Can be manually run with:
```
yarn test:unit
```

Automatically run every push with [GitHub Actions](https://github.com/nih-sparc/sparc-design-system-components/actions?query=workflow%3ATests)
