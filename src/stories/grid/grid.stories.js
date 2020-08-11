import './grid-demo-styles.scss';

export default {
  title: 'Layout/Grid',
  includeStories: []
}

export const Basic = () => ({
  template: `
    <div class="grid-demo">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1
              </div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1/4
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1/4
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1/4
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1/4
              </div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1/2
              </div>
            </div>
          </div>
          <div class="bx--col">
            <div class="outside">
              <div class="inside">
                1/2
              </div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col-sm-12 bx--col-md-4">
            <div class="outside">
              <div class="inside">
                1/2
              </div>
            </div>
          </div>
          <div class="bx--col-sm-4 bx--col-md-4">
            <div class="outside">
              <div class="inside">
                1/2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export const ResponsiveBreakpoints = () => ({
  template: `
    <div class="grid-demo">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-sm-1 bx--col-md-2 bx--col-lg-4">
            <div class="outside">
              <div class="inside">Content</div>
            </div>
          </div>
          <div class="bx--col-sm-1 bx--col-md-2 bx--col-lg-6">
            <div class="outside">
              <div class="inside">Content</div>
            </div>
          </div>
          <div class="bx--col-sm-1 bx--col-md-2 bx--col-lg-4">
            <div class="outside">
              <div class="inside">Content</div>
            </div>
          </div>
          <div class="bx--col-sm-1 bx--col-md-2 bx--col-lg-2">
            <div class="outside">
              <div class="inside">Content</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export const Offset = () => ({
  template: `
    <div class="grid-demo">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--offset-lg-15 bx--col-lg-1">
            <div class="outside">
              <div class="inside">1</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-14 bx--col-lg-2">
            <div class="outside">
              <div class="inside">2</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-13 bx--col-lg-3">
            <div class="outside">
              <div class="inside">3</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-12 bx--col-lg-4">
            <div class="outside">
              <div class="inside">4</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-11 bx--col-lg-5">
            <div class="outside">
              <div class="inside">5</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-10 bx--col-lg-6">
            <div class="outside">
              <div class="inside">6</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-9 bx--col-lg-7">
            <div class="outside">
              <div class="inside">7</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-8 bx--col-lg-8">
            <div class="outside">
              <div class="inside">8</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-7 bx--col-lg-9">
            <div class="outside">
              <div class="inside">9</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-6 bx--col-lg-10">
            <div class="outside">
              <div class="inside">10</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-5 bx--col-lg-11">
            <div class="outside">
              <div class="inside">11</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-4 bx--col-lg-12">
            <div class="outside">
              <div class="inside">12</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-3 bx--col-lg-13">
            <div class="outside">
              <div class="inside">13</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-2 bx--col-lg-14">
            <div class="outside">
              <div class="inside">14</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-1 bx--col-lg-15">
            <div class="outside">
              <div class="inside">15</div>
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-0 bx--col-lg-16">
            <div class="outside">
              <div class="inside">16</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export const HideColumns = () => ({
  template: `
    <div class="grid-demo">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-sm-1 bx--col-md-2 bx--col-lg-6">
            <div class="outside">
              <div class="inside">Never Hidden</div>
            </div>
          </div>
          <div class="bx--col-sm-2 bx--col-md-0 bx--col-lg-6">
            <div class="outside">
              <div class="inside">Hidden on Medium Screens</div>
            </div>
          </div>
          <div class="bx--col-sm-0 bx--col-md-3 bx--col-lg-4">
            <div class="outside">
              <div class="inside">Hidden on Small Screens</div>
            </div>
          </div>
          <div class="bx--col-sm-1 bx--col-md-3 bx--col-lg-0">
            <div class="outside">
              <div class="inside">Hidden on Large Screens</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
