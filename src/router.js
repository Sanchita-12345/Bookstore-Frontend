import Vue from 'vue'
import Router from 'vue-router'
import Register from './Pages/Register.vue'
import Login from './Pages/Login.vue'
import Forgot from './Pages/Forgot.vue'
import Reset from './Pages/Reset.vue'
import Dashboard from './components/Dashboard.vue'
import DisplayBooks from './components/DisplayBooks.vue'
import Orderplace from './components/Orderplace.vue'
import sortBooksHightoLow from './components/sortBooksHightoLow.vue'
import sortBooksLowtoHigh from './components/sortBooksLowtoHigh.vue'
import Cart from './components/Cart.vue'

Vue.use(Router)
export  default new Router({
    mode:'history',
    routes:[
        {
            path:'/register',
            component:Register
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/forgot-password',
            component:Forgot
        },
        {
            path:'/resetPassword',
            component:Reset
        },
        {
            path:'/dashboard',
            component:Dashboard,
            children:[{
                path:'/displayBooks',
                component: DisplayBooks
            },
            {
                path:'/sortBooksHightoLow',
                component: sortBooksHightoLow
            },
            {
                path:'/sortBooksLowtoHigh',
                component: sortBooksLowtoHigh
            },
            {
                path:'/cart',
                component: Cart
            }  
        ]
        },
        {
            path: '/orderplace',
            component: Orderplace
        },   
    ]
})