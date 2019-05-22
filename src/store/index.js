import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import products from './modules/products';
import cart from './modules/cart';
import menu from './modules/menu';
import checkout from './modules/checkout';

export default new Vuex.Store({
    modules: {
        products,
        cart,
        menu,
        checkout
    },
    strict: process.env.NODE_ENV !== 'production'
});