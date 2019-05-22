import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        productsId: {},
        productsIdCount: [],
        totalPrice: 0
    },
    getters: {
        productsId(state){
            return state.productsId;
        },
        productsInCart(state, getters){
            let cnt = 0;

            for (const key in state.productsId) {
                cnt += state.productsId[key].cnt;
            }

            return cnt;
        },
        hasInCart: (state, getters) => (id) => {
            return getters.productsId[id] !== undefined
        },
        calcTotalPrice(state, getters, rootState, rootGetters){
            let sum = 0;

            for (const key in state.productsId) {
                sum += rootGetters['products/getProduct'](key).price * state.productsId[key].cnt;
            }

            return sum;
        }
    },
    mutations: {
        addToCart(state, product){
            Vue.set( state.productsId, [ product.id ], {
                id: product.id,
                name: product.name,
                price: product.price,
                cnt: 1
            });

            product.elem.disabled = false;
        },
        removeFromCart(state, product ){
            Vue.delete(state.productsId, product.id );

            product.elem.disabled = false;
        },
        increaseCount(state, id){
            state.productsId[ id ].cnt++;
        },
        reduceCount(state, id){
            state.productsId[ id ].cnt--;
        },
        sendRequest(state, elem){
            elem.disabled = true;
        },
        clearCart(state){
            state.productsId = {};
        }
    },
    actions: {
        addToCart(store, product){
            let isInCart = store.getters.productsId[product.id] !== undefined;

            store.commit('sendRequest', product.elem);

            setTimeout(() => {

                if ( !isInCart ) {
                    store.commit('addToCart', product);
                }

            }, 500);
            
        },
        removeFromCart(store, product){
            store.commit('sendRequest', product);

            setTimeout(() => {
                store.commit('removeFromCart', product);
            }, 500);
        },
        increaseCount({ commit }, id){
            commit('increaseCount', id);
        },
        reduceCount({ commit, state }, id){
            if ( state.productsId[ id ].cnt <= 1 ) {
                commit('removeFromCart', id);
                return;
            };

            commit('reduceCount', id);
        },
        clearCart({ commit }){
            
            setTimeout(() => {
                commit('clearCart');
            }, 500);

        }
    }
};