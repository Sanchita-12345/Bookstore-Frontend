import Register from '../../src/Pages/Register.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('Register.vue', () =>{
    let wrapper;

    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Register, localVue);
    });
    
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    it('renders a vue instance', () => {
        expect(shallowMount(Register).vm).toBeTruthy();
    })

    it('has a button', () => {
        expect(wrapper.contains('#reg-btn')).toBe(true);
    });

    it('has a button Signup', () =>{
        expect(wrapper.find('#reg-btn').text()).toBe('Signup');
    });

    it('has a mobile number section', () => {
        expect(wrapper.contains('#telephone-number')).toBe(true);
    });

    it('has a image', () => {
        expect(wrapper.find('#side-img')).toBeTruthy();
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

    it('has a input section for fullname', () => {
        expect(wrapper.contains('#fullname')).toBe(true);
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