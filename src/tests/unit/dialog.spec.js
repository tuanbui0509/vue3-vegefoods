import { shallowMount } from '@vue/test-utils'
import Dialog from '@/components/Dialog.vue'

describe('Dialog.vue', () => {
  it('renders props.title when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(Dialog, {
      props: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
})
