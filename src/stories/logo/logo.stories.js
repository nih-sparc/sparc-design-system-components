import SparcLogo from '@/components/SparcLogo/SparcLogo.vue'

import './demo-styles.scss';

export default {
  title: 'Components/Logo',
  includeStories: []
}

export const Logo = () => ({
  components: { SparcLogo },
  template: `
    <div class="logo-demo-styles">
      <div class="bx--grid">
        <div class="bx--row mb-32">
          <div class="bx--col">
            <div class="logo-primary">
              <sparc-logo type="primary" />
            </div>
          </div>
        </div>

        <div class="bx--row mb-32">
          <div class="bx--col">
            <div class="logo-white">
              <sparc-logo type="white" />
            </div>
          </div>
          <div class="bx--col">
            <div class="logo-black">
              <sparc-logo type="black" />
            </div>
          </div>
        </div>

        <div class="bx--row">
          <div class="bx--col">
            <div class="logo-usage-wrap">
              <div class="logo-1 demo-logo-usage cross">
                <sparc-logo class="logo" type="primary" />
              </div>
              <div class="logo-2 demo-logo-usage cross">
                <sparc-logo class="logo" type="primary" />
              </div>
              <div class="logo-3 demo-logo-usage">
                <sparc-logo class="logo" type="primary" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  `
})
export const Secondary = () => ({
  components: { SparcLogo },
  template: `
    <div class="logo-demo-styles">
      <div class="bx--grid">
        <div class="bx--row mb-32">
          <div class="bx--col">
            <div class="logo-primary">
              <sparc-logo type="primary" :secondary="true" />
            </div>
          </div>
        </div>

        <div class="bx--row mb-32">
          <div class="bx--col">
            <div class="logo-white">
              <sparc-logo type="white" :secondary="true" />
            </div>
          </div>
          <div class="bx--col">
            <div class="logo-black">
              <sparc-logo type="black" :secondary="true" />
            </div>
          </div>
        </div>

        <div class="bx--row">
          <div class="bx--col">
            <div class="logo-usage-wrap">
              <div class="logo-1 demo-logo-usage cross">
                <sparc-logo class="logo" type="primary" :secondary="true" />
              </div>
              <div class="logo-2 demo-logo-usage cross">
                <sparc-logo class="logo" type="primary" :secondary="true" />
              </div>
              <div class="logo-3 demo-logo-usage">
                <sparc-logo class="logo" type="primary" :secondary="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
