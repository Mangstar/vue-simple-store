<template>
    <div>
        <div class="product-info">
            <h2 class="text">{{ productInfo.name }}</h2>
            <img :src="productInfo.image" :alt="productInfo.name">
            <p class="text">Цена {{ productInfo.price }} рублей</p>
            <button
                    v-if="!hasInCart(getId)"
                    class="btn btn-success"
                    @click="addToCart({id: product(getId).id, price: product(getId).price, elem: $event.target})">
                Добавить в корзину
            </button>
            <template v-else>
                <button
                    class="btn btn-danger"
                    @click="reduceCount(getId)">
                -
                </button>
                <button
                        class="btn btn-warning" 
                        @click="removeFromCart({id: product(getId).id, elem: $event.target})">
                    Убрать из корзины
                </button>
                <button
                        class="btn btn-success"
                        @click="increaseCount(getId)">
                    +
                </button>    
            </template>
        </div>
        <router-link :to="{name: 'products'}" tag="button" class="btn btn-primary mt-4">
            <a class="color-white">
                Вернуться в каталог
            </a>
        </router-link>
    </div>
</template>
<script>

    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                product: 'products/getProduct',
                hasInCart: 'cart/hasInCart',
                products: 'products/productCards',
                productsId: 'cart/productsId'
            }),
            getId(){
                return this.$route.params.id;
            },
            productInfo(){
                return this.product(this.getId);
            }
        },
        methods: {
            ...mapActions({
                addToCart: 'cart/addToCart',
                removeFromCart: 'cart/removeFromCart',
                increaseCount: 'cart/increaseCount',
                reduceCount: 'cart/reduceCount'
            })
        }
    }
</script>
<style>
    .color-white {
        color: #fff;
    }
</style>