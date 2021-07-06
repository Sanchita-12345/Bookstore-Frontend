/*************************************************************************
* Purpose : to test the Dashboard component
*
* @file : Dashboard.spec.js
* @author : Sanchita Barik <sanchitabarik20@gmail.com>
* @since : 5/07/2021
*
**************************************************************************/
import Dashboard from '../../src/components/Dashboard.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('Dashboard.vue', () =>{
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Dashboard, localVue);
    });

    test('setup correctly', () => {
        expect(true).toBe(true)
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Dashboard).vm).toBeTruthy();
    });

    it('has a top navigation bar',()=>{
        expect(wrapper.find('.navbar-top')).toBeTruthy();
    });

    it('has a header section in top navigation bar',()=>{
        expect(wrapper.find('.navbar-header')).toBeTruthy();
    });

    it('has a Bookstore logo inside navigation bar',()=>{
        expect(wrapper.find('#education-logo')).toBeTruthy();
    });

    it('has a navbar title Bookstore inside navigation bar',()=>{
        expect(wrapper.find('#navbar-title')).toBeTruthy();
    });

    it('has a search icon inside search box',()=>{
        expect(wrapper.find('.fa-search')).toBeTruthy();
    }); 

    it('has a search box inside navigation bar',()=>{
        expect(wrapper.find('.form-control')).toBeTruthy();
    }); 

    it('has a profile icon at the rightSide of navigation bar',()=>{
        expect(wrapper.find('.fa-user')).toBeTruthy();
    }); 

    it('has a profile section under the user logo',()=>{
        expect(wrapper.find('.profile-content')).toBeTruthy();
    });

    it('has a cart icon at the rightSide of navbar after profile icon',()=>{
        expect(wrapper.find('.fa-cart-plus')).toBeTruthy();
    });

    it('has a cart section under the cart logo',()=>{
        expect(wrapper.find('.cart-content')).toBeTruthy();
    });

    it('has a book header section',()=>{
        expect(wrapper.find('.books-total')).toBeTruthy();
    });

    it('has total numbers of books',()=>{
        expect(wrapper.find('.items')).toBeTruthy();
    });

    it('has a section which sort books',()=>{
        expect(wrapper.find('.sort-books')).toBeTruthy();
    });
});