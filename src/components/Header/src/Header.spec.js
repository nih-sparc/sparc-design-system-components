import { mount, createLocalVue  } from '@vue/test-utils'
import Header from './Header'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Header', () => {

  const wrapper = mount(Header, {
    localVue,
    router,
    stubs: ['el-input', 'el-option', 'el-select', 'svgicon'],
    propsData: {
      linkComponent: "router-link"
    }
  })

  it('check-header', async () => {
    const header__nav = wrapper.find('.header__nav--main')
    expect(header__nav.exists()).toBe(true)
  })

  it('check-links', async () => {
    const link = wrapper.find('.nav5')
    expect(link.exists()).toBe(true)
  })

})
