/*************************************************************************
* Purpose : to test the Orderplace component
*
* @file : Orderplace.spec.js
* @author : Sanchita Barik <sanchitabarik20@gmail.com>
* @since : 14/07/2021
*
**************************************************************************/
import Orderplace from '../../src/components/Orderplace.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('Orderplace.vue', () =>{
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Orderplace, localVue);
    });

    test('setup correctly', () => {
        expect(true).toBe(true)
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Orderplace).vm).toBeTruthy();
    });

    it('has a order place container',()=>{
        expect(wrapper.find('.order-place')).toBeTruthy();
    });

    it('has a image section',()=>{
        expect(wrapper.find('.image-container')).toBeTruthy();
    });
    
    it('has a title container',()=>{
        expect(wrapper.find('.title-container')).toBeTruthy();
    });
    
    it('has a message section',()=>{
        expect(wrapper.find('.message-section')).toBeTruthy();
    });
    
    it('has a title section',()=>{
        expect(wrapper.find('.title-section')).toBeTruthy();
    });

    it('has a contact us section',()=>{
        expect(wrapper.find('.contact-us')).toBeTruthy();
    });
    
    it('has a address us section',()=>{
        expect(wrapper.find('.address')).toBeTruthy();
    });
    
    it('has a email us section',()=>{
        expect(wrapper.find('.email-sec')).toBeTruthy();
    });

    it('has a address section',()=>{
        expect(wrapper.find('.address-sec')).toBeTruthy();
    });

    it('has a contact section',()=>{
        expect(wrapper.find('.contact-sec')).toBeTruthy();
    });

    it('has a continue shopping button',()=>{
        expect(wrapper.find('.continue-shopping')).toBeTruthy();
    });

});