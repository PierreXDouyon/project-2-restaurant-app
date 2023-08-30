import { mount } from '@vue/test-utils'
import AuthView from '@/views/AuthView.vue'
import InputTitleView from '@/components/InputTitle.vue'

describe('AuthView', () => {
  it('renders the InputTitleView component', () => {
    const wrapper = mount(AuthView)

    // Find the InputTitleView component within AuthView
    const inputTitleView = wrapper.findComponent(InputTitleView)

    // Assert that InputTitleView is rendered
    expect(inputTitleView.exists()).toBe(true)
    expect(inputTitleView.props('name')).toBe('User Name')
  })
})