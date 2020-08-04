import { mount } from '@vue/test-utils'
import ContentOverviewCard from './ContentOverviewCard'

describe('ContentOverviewCard', () => {
  const titleText = 'Comprehensive structural and functional mapping of the mammalian cardiac nervous system'

  const wrapper = mount(ContentOverviewCard, {
    propsData: {
      subtitle: 'Cardio-respiratory system: heart',
      title: titleText,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing',
      image: 'https://placehold.it/736'
    }
  })

  it('Does not need to truncate', async () => {
    const title = wrapper.find('.content_overview_card__container--content-title-default')
    expect(title.text()).toBe(titleText)
  })

  it('Truncates title properly', async () => {
    wrapper.setProps({
      title: 'Comprehensive structural and functional mapping of the mammalian cardiac nervous system Comprehensive structural and functional mapping of the mammalian cardiac nervous system'
    })

    // Need to await the DOM being updated
    await wrapper.vm.$nextTick()

    const title = wrapper.find('.content_overview_card__container--content-title-default')

    /**
     * 150 characters truncated + 3 characters for the `...`
     * added in the computed proeprty
     */
    expect(title.text().length).toBe(153)
  })
})
