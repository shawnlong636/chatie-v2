import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ChatieLogo from '../components/chatie-logo.vue'

describe('Chatie Logo', () => {
  test('Logo properly renders', () => {
    const wrapper = shallowMount(ChatieLogo, {
      global: {
        stubs: {
          NuxtLink: RouterLinkStub
        }
      }
    })

    expect(wrapper).toBeTruthy()
    expect(wrapper.html()).toContain('Chat')
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')
  })
})
