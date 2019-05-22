export default {
    namespaced: true,
    state: {
        items: [
            {
                title: 'products',
                route: 'products'
            },
            {
                title: 'cart',
                route: 'cart'
            },
            {
                title: 'checkout',
                route: 'checkout'
            }
        ]
    },
    getters: {
        getMenu(state){
            return state.items;
        }
    },
    mutations: {

    },
    actions: {

    }
};