// Import the necessary components and testing utilities
import { mount } from '@vue/test-utils'
import ButtonView from '@/components/Button.vue'
import AuthView from '@/views/AuthView.vue'

describe('Button', () => {
  it('renders the ButtonView component', () => {
    const wrapper = mount(AuthView)

    // Find the ButtonView component within AuthView
    const buttonView = wrapper.findComponent(ButtonView)

    // Assert that ButtonView is rendered
    expect(buttonView.exists()).toBe(true)
    expect(buttonView.props('name')).toBe('LOGIN')
  })
  
  it('emits an event when the button is clicked', async () => {
    const wrapper = mount(ButtonView)
    const button = wrapper.find('.button')

    // Simulate a button click
    await button.trigger('click')

    // Assert the emitted event
    expect(wrapper.emitted('button-clicked')).toBeTruthy()  // Use 'button-clicked' here

    // Assert the length of the emitted event array
    expect(wrapper.emitted('button-clicked').length).toBe(1)
  })
})