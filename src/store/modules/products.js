export default {
    namespaced: true,
    state: {
        productCards: {
            pencil: {
                id: 'pencil',
                name: 'Карандаш',
                price: 20,
                image: 'http://localhost:8080/src/assets/images/pencil.jpg'
            },
            pen: {
                id: 'pen',
                name: 'Ручка',
                price: 30,
                image: 'http://localhost:8080/src/assets/images/pen.png'
            },
            copybook: {
                id: 'copybook',
                name: 'Тетрадь',
                price: 50,
                image: 'http://localhost:8080/src/assets/images/copybook.jpg'
            }
        }
    },
    getters: {
        productCards(state){
            return state.productCards;
        },
        getProduct: (state) => (id) => state.productCards[ id ]
    }
};