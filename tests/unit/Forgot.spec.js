/*************************************************************************
* Purpose : to test the Forgot component
*
* @file : Forgot.spec.js
* @author : Sanchita Barik <sanchitabarik20@gmail.com>
* @since : 28/06/2021
*
**************************************************************************/

import Forgot from '../../src/Pages/Forgot.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('Forgot.vue', () =>{
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Forgot, localVue);
    });

    test('setup correctly', () => {
        expect(true).toBe(true)
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Forgot).isVueInstance()).toBe(true);
    });

    it('has a button', () => {
        expect(wrapper.contains('#forgot-btn')).toBe(true);
    });

    it('has a button Reset Password', () =>{
        expect(wrapper.find('#forgot-btn').text()).toBe('Reset Password');
    });

    it('has a email id section', () => {
        expect(wrapper.contains('#email-id')).toBe(true);
    });

    it('has one title section', () =>{
        expect(wrapper.find('#forgot-title').exists()).toBe(true);
    });

    it('has a title Login', () =>{
        expect(wrapper.find('#forgot-title').text()).toBe('Forgot Your Password?');
    })
})