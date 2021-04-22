import { mount } from '@vue/test-utils'
import Header from './Header'

describe('Header', () => {

  const wrapper = mount(Header, {
    propsData: {
      linkComponent: "router-link"
    }
  })

  it('', async () => {
    const header__nav = wrapper.find('.header__nav--main')
    expect(header__nav.exists()).toBe(true)
  })

})
