/*************************************************************************
* Purpose : to test the Forgot component
*
* @file : Reset.spec.js
* @author : Sanchita Barik <sanchitabarik20@gmail.com>
* @since : 29/06/2021
*
**************************************************************************/

import Reset from '../../src/Pages/Reset.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('Reset.vue', () =>{
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Reset, localVue);
    });

    test('setup correctly', () => {
        expect(true).toBe(true)
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Reset).isVueInstance()).toBe(true);
    });

    it('has a button', () => {
        expect(wrapper.contains('#reset-btn')).toBe(true);
    });

    it('has a button submit for Reset Password', () =>{
        expect(wrapper.find('#reset-btn').text()).toBe('confirm');
    });

    it('has one title section', () =>{
        expect(wrapper.find('#reset-title').exists()).toBe(true);
    });

    it('has a title', () =>{
        expect(wrapper.find('#reset-title').text()).toBe('Reset Your Password');
    });

    it('has two password sections', () => {
        expect(wrapper.find('#reset-password')).toBeTruthy();
    });
})