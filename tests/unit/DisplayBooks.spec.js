/*************************************************************************
* Purpose : to test the DisplayBooks component
*
* @file : DisplayBooks.spec.js
* @author : Sanchita Barik <sanchitabarik20@gmail.com>
* @since : 5/07/2021
*
**************************************************************************/
import DisplayBooks from '../../src/components/DisplayBooks.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('DisplayBooks.vue', () =>{
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(DisplayBooks, localVue);
    });

    test('setup correctly', () => {
        expect(true).toBe(true)
    });

    it('renders a vue instance', () => {
        expect(shallowMount(DisplayBooks).vm).toBeTruthy();
    });

    it('has a display books section',()=>{
        expect(wrapper.find('.carddisplay-section')).toBeTruthy();
    });

    it('has a display books container',()=>{
        expect(wrapper.find('.card-book')).toBeTruthy();
    });

    it('has a books quantity section',()=>{
        expect(wrapper.find('.books-total')).toBeTruthy();
    });

    it('has a image section',()=>{
        expect(wrapper.find('.image-section')).toBeTruthy();
    });

    it('has a image container',()=>{
        expect(wrapper.find('.image-container')).toBeTruthy();
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

    it('has a buttons section',()=>{
        expect(wrapper.find('.buttons')).toBeTruthy();
    });

    it('has a add to bag button section',()=>{
        expect(wrapper.find('.AddBag')).toBeTruthy();
    });

    it('has a wishlist button section',()=>{
        expect(wrapper.find('.wishlist')).toBeTruthy();
    });

    it('has a added to bag button',()=>{
        expect(wrapper.find('.big-btn')).toBeTruthy();
    });
});