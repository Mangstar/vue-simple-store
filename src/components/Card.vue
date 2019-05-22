<template>
    <div class="card">
        <p class="text text-left">Товаров в корзине: <strong>{{ productsInCart }}</strong></p>
        <p class="text text-left">Сумма: <strong>{{ totalPrice }}</strong> рублей</p>
        <button class="btn btn-primary" @click="clearCart">Очистить корзину</button>
    </div>
</template>
<script>

    import { mapGetters, mapActions, mapMutations } from 'vuex';

    export default {
        data(){
            return {
                
            }
        },
        computed: {
            ...mapGetters({
                productsInCart: 'cart/productsInCart',
                totalPrice: 'cart/calcTotalPrice'
            })
        },
        methods: {
            ...mapActions({
                clearCart: 'cart/clearCart'
            })
        }
    }
</script>
<style>
    .card {
        padding: 10px 10px 0 10px;
    }
</style>