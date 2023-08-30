import { mount } from '@vue/test-utils'
import AuthView from '@/views/AuthView.vue'
import MemberProfileView from '@/views/MemberProfileView.vue';
import TitleView from '@/components/Title.vue'

describe('AuthView', () => {
  it('renders the TitleView component', () => {
    const wrapper = mount(AuthView)

    // Find the TitleView component within AuthView
    const titleView = wrapper.findComponent(TitleView)

    // Assert that TitleView is rendered
    expect(titleView.exists()).toBe(true)
    expect(titleView.props('title')).toBe('Login')
  })

  it('renders the TitleView component with the correct title', () => {
    const wrapper = mount(MemberProfileView);

    // Find the TitleView component within MemberProfileView
    const titleView = wrapper.findComponent(TitleView);

    // Assert that TitleView is rendered
    expect(titleView.exists()).toBe(true);

    // Assert the title prop of TitleView
    expect(titleView.props('title')).toBe('Member Profile');
  });
})