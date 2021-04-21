export default {
  title: 'Components/Icons',
  includeStories: []
}

import './icon-demo-styles.scss'

const icons = [
  '2horpanel',
  '2vertpanel',
  '3panel',
  '4panel',
  'changeBckgd',
  'close',
  'closeFullScreen',
  'dock',
  'fullScreen',
  'pause',
  'permalink',
  'play',
  'resetZoom',
  'singlepanel',
  'tooltips',
  'undock',
  'zoomIn',
  'zoomOut'
]

const social = [
  'social/facebook',
  'social/linkedin',
  'social/twitter'
]

const createDemo = (icons, colors, isBackground) => {
  return {
    data() {
      return {
        icons,
        colors,
        isBackground
      }
    },
    template: `
      <div class="icon-demo-styles">
        <div class="bx--grid">
          <div class="bx--row mb-32">
            <div class="bx--col">
              <strong>Name</strong>
            </div>
          </div>
          <div
            class="bx--row mb-16"
            v-for="icon in icons"
            :key="icon"
          >
            <div class="bx--col">
              {{ icon }}
            </div>
            <div class="bx--col">
              <svgicon
                :name="icon"
                :class="{ 'background': isBackground }"
                width="36"
                height="36"
                :color="colors"
              />
            </div>
          </div>
        </div>
      </div>
    `
  }
}

export const Background = () => createDemo(icons, '', true)
export const NoBackground = () => createDemo(icons, '#000', false)
export const Social = () => createDemo(social, '#8300BF')
