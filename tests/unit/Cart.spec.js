/*************************************************************************
* Purpose : to test the Cart component
*
* @file : Cart.spec.js
* @author : Sanchita Barik <sanchitabarik20@gmail.com>
* @since : 15/07/2021
*
**************************************************************************/
import Cart from '../../src/components/Cart.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('Cart.vue', () =>{
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Cart, localVue);
    });

    test('setup correctly', () => {
        expect(true).toBe(true)
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Cart).vm).toBeTruthy();
    });

    it('has a display books main section',()=>{
        expect(wrapper.find('.main')).toBeTruthy();
    });

    it('has a display particular books container',()=>{
        expect(wrapper.find('.first-section')).toBeTruthy();
    });

    it('has a books container',()=>{
        expect(wrapper.find('.container')).toBeTruthy();
    });

    it('has a image section',()=>{
        expect(wrapper.find('.mid-section')).toBeTruthy();
    });

    it('has a image container',()=>{
        expect(wrapper.find('.checkout-img')).toBeTruthy();
    });

    it('has a title section',()=>{
        expect(wrapper.find('.title-section')).toBeTruthy();
    });

    it('has a price section',()=>{
        expect(wrapper.find('.price-section')).toBeTruthy();
    });

    it('has a author section',()=>{
        expect(wrapper.find('.author-section')).toBeTruthy();
    });

    it('has a icons section',()=>{
        expect(wrapper.find('.icons')).toBeTruthy();
    });

    it('has a minus icon',()=>{
        expect(wrapper.find('.la-minus-circle')).toBeTruthy();
    });

    it('has a plus icon',()=>{
        expect(wrapper.find('.la-plus-circle')).toBeTruthy();
    });

    it('has a quantity part',()=>{
        expect(wrapper.find('.rectancle')).toBeTruthy();
    });

    it('has a buttons section',()=>{
        expect(wrapper.find('.btn-grps')).toBeTruthy();
    });

    it('has a place order button',()=>{
        expect(wrapper.find('.btn')).toBeTruthy();
    });

    it('has a customer details section',()=>{
        expect(wrapper.find('.second-section')).toBeTruthy();
    });

    it('has a customer details form',()=>{
        expect(wrapper.find('.cutomer-detailsform')).toBeTruthy();
    });

    it('has a customer details tile in form',()=>{
        expect(wrapper.find('.customer-title')).toBeTruthy();
    });
    
    it('has a name section in customer details form',()=>{
        expect(wrapper.find('.form-name')).toBeTruthy();
    });
    
    it('has a phone number section in customer details form',()=>{
        expect(wrapper.find('.form-number')).toBeTruthy();
    });
    
    it('has a pincode section in customer details form',()=>{
        expect(wrapper.find('.form-pin')).toBeTruthy();
    });

    it('has a locality section in customer details form',()=>{
        expect(wrapper.find('.form-locality')).toBeTruthy();
    });

    it('has a city section in customer details form',()=>{
        expect(wrapper.find('.form-city')).toBeTruthy();
    });

    it('has a landmark section in customer details form',()=>{
        expect(wrapper.find('.form-landmark')).toBeTruthy();
    });

    it('has a radio button container',()=>{
        expect(wrapper.find('.radio-container')).toBeTruthy();
    });

    it('has a Home radio button',()=>{
        expect(wrapper.find('#Home')).toBeTruthy();
    });

    it('has a Work radio button',()=>{
        expect(wrapper.find('#Work')).toBeTruthy();
    });

    it('has a Others radio button',()=>{
        expect(wrapper.find('#Others')).toBeTruthy();
    });

    it('has a checkout button',()=>{
        expect(wrapper.find('.checkout-btn')).toBeTruthy();
    });
});