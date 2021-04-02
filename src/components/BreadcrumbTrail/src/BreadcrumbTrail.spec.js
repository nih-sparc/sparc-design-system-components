import { mount } from '@vue/test-utils'
import BreadcrumbTrail from './BreadcrumbTrail'

describe('ContentOverviewCard', () => {
  const titleText = 'Spatial distribution'

  const wrapper = mount(BreadcrumbTrail, {
    propsData: {
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
      title: titleText,
      linkComponent: 'a'
    }
  })

  it('Does not need to truncate', async () => {
    const title = wrapper.find('.title')
    expect(title.text()).toBe(titleText)
  })

  it(`Truncates title`, async () => {
    wrapper.setProps({
      title: 'Foo Foo Foo Foo Foo Foo Foo Fooo bar bar bar bar bar'
    })

    // Need to await the DOM being updated
    await wrapper.vm.$nextTick()

    const title = wrapper.find('.title')

    /**
     * 32 characters truncated + 3 characters for the `...`
     * added in the computed proeprty
     */
    expect(title.text().length).toBe(35)
  })

  it(`Truncates title, and doesn't truncate in the middle of a word`, async () => {
    wrapper.setProps({
      title: 'Comprehensive structural and functional mapping of the mammalian cardiac nervous system Comprehensive structural and functional mapping of the mammalian cardiac nervous system'
    })

    // Need to await the DOM being updated
    await wrapper.vm.$nextTick()

    const title = wrapper.find('.title')

    /**
     * 39 characters truncated + 3 characters for the `...`
     * added in the computed proeprty
     */
    expect(title.text().length).toBe(42)
  })
})
