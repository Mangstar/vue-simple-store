import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import CardPage from './components/CartPage';
import ProductPage from './components/Product-Page';
import Main from './components/Main';
import Chechout from './components/Checkout';
import E404 from './components/404.vue';

const routes = [
    {
        name: 'main',
        path: '',
        component: Main
    },
    {
        name: 'products',
        path: '/products',
        component: Main
    }, {
        name: 'cart',
        path: '/cart',
        component: CardPage
    }, {
        name: 'product',
        path: '/products/:id',
        component: ProductPage
    }, {
        name: 'checkout',
        path: '/checkout',
        component: Chechout
    }, {
        path: '*',
        component: E404
    }
];

export default new VueRouter({
    routes,
    mode: 'history'
});