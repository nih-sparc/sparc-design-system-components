import '../grid/grid-demo-styles.scss'

export default {
  title: 'Components/Breadcrumbs',
  includeStories: []
}

const defaultData = () => {
  return {
    breadcrumb: [
      {
        to: '#',
        label: 'Home'
      },
      {
        to: '#',
        label: 'Find Data'
      }
    ],
    title: 'Spatial distribution and morphometric characterization of vagal efferents associated with the myenteric plexus of the rat stomach',
    linkComponent: 'a'
  }
}

export const Primary = () => ({
  data: () => defaultData(),
  template: `
    <div>
      <breadcrumb-trail :title="title" :breadcrumb="breadcrumb" :link-component="linkComponent" />
    </div>
  `
})

export const Layout = () => ({
  data: () => defaultData(),
  template: `
    <div>
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
              <breadcrumb-trail :title="title" :breadcrumb="breadcrumb" :link-component="linkComponent" />
            </div>
          </div>

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
        </div>
      </div>
    </div>
  `
})


