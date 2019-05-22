export default {
    namespaced: true,
    state: {
        checkoutForm: [
            {
                id: 1,
                type: 'text',
                name: 'name',
                value: '',
                placeholder: 'Имя',
                label: 'Введите имя',
                pattern: /^[a-zA-Zа-яА-Яёё]{2,14}$/
            }, {
                id: 2,
                type: 'text',
                name: 'phone',
                value: '',
                placeholder: 'Телефон',
                label: 'Введите номер телефона',
                pattern: /^[\d-]{11,15}$/
            }, {
                id: 3,
                type: 'email',
                name: 'email',
                value: '',
                placeholder: 'Почта',
                label: 'Введите адрес почты',
                pattern: /^[a-zA-Z-_]+@[a-z]{2,8}\.[a-z]{2,6}$/
            }
        ]
    },
    getters: {
        checkoutForm(state){
            return state.checkoutForm;
        }
    },
    mutations: {
        updateInputValue(state, data){
            state.checkoutForm[ data.index ].value = data.value;
        }
    }
};