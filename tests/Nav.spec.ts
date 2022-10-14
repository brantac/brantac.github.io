import { mount } from '@vue/test-utils'
import Nav from '../components/Nav.vue'

describe('Navbar', () => {
    it('should open nav menu when toggle is clicked', async () => {
        // Setup
        const wrapper = mount(Nav)
        
        // Action
        expect(wrapper.get('[data-test="toggle-button"]').classes()).not.toContain('menuopen')
        await wrapper.get('[data-test="toggle-button"]').trigger('click')

        // Assertion
        expect(wrapper.get('[data-test="toggle-button"]').classes()).toContain('menuopen')
    })
})