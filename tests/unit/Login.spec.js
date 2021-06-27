import Login from '../../src/Pages/Login.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('Login.vue', () =>{

    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Login, localVue);
    });

    test('setup correctly', () => {
        expect(true).toBe(true)
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Login).isVueInstance()).toBe(true);
    });

    it('has a button', () => {
        expect(wrapper.contains('#login-btn')).toBe(true);
    });

    it('has a button Login', () =>{
        expect(wrapper.find('#login-btn').text()).toBe('Login');
    });

    it('has a image', () => {
        expect(wrapper.contains('#side-img')).toBe(true);
    });

    it('has a eye button for seeing the password', () => {
        expect(wrapper.contains('#eye')).toBe(true);
    });

    it('has a password section', () => {
        expect(wrapper.contains('#pwd')).toBe(true);
    });

    it('has a email id section', () => {
        expect(wrapper.contains('#email-id')).toBe(true);
    });

    it('has two title sections', () =>{
        expect(wrapper.find('#sign-in').exists()).toBe(true);
        expect(wrapper.find('#sign-up').exists()).toBe(true);        
    });

    it('has a title Login', () =>{
        expect(wrapper.find('#sign-in').text()).toBe('Login');
    });

    it('has a title Signup', () =>{
        expect(wrapper.find('#sign-up').text()).toBe('signup');
    });
})