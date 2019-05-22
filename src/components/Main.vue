<template>
    <main class="main">
        <div class="row">

            <app-product
                        v-for="(product, index) in products"
                        :key="product.id">
                <template #default>
                    <h3 class="text">{{ product.name }}</h3>
                    <img :src="product.image" :alt="product.name">
                    <p class="text">Количество: 
                        <strong v-if="!hasInCart(product.id)">0</strong> 
                        <strong v-else>{{ productsId[ index ].cnt }}</strong> 
                        штук</p>
                    <p class="text">{{ product.price }} рублей</p>
                </template>

                <template #footer>
                    <p>
                        <router-link :to="{
                            name: 'product',
                            params: {
                                id: product.id
                            }}" tag="button" class="btn btn-primary">
                            <a class="color-white">Узнать больше</a>
                        </router-link>
                    </p>
                    <transition name="rotate" mode="out-in">
                        <button 
                            v-if="!hasInCart(product.id)" 
                            class="btn btn-success"
                            @click="addToCart({id: product.id, name: product.name, price: product.price, elem: $event.target})">
                            Добавить в корзину
                        </button>
                        <template v-else>
                            <div>
                                <button
                                        class="btn btn-danger"
                                        @click="reduceCount(product.id)">
                                    -
                                </button>
                                <button
                                        class="btn btn-warning"
                                        @click="removeFromCart({id: product.id, elem: $event.target})">
                                    Убрать из корзины
                                </button>
                                <button
                                        class="btn btn-success"
                                        @click="increaseCount(product.id)">
                                    +
                                </button>       
                            </div> 
                        </template>
                    </transition>
                </template>
            </app-product>
           
        </div>
    </main>
</template>
<script>

    import Product from './Product';

    import { mapGetters, mapActions } from 'vuex';

    export default {
        components: {
            'app-product': Product
        },
        data(){
            return {

            };
        },
        computed: {
            ...mapGetters({
                products: 'products/productCards',
                hasInCart: 'cart/hasInCart',
                productsId: 'cart/productsId'
            })
        },
        methods: {
            ...mapActions({
                addToCart: 'cart/addToCart',
                removeFromCart: 'cart/removeFromCart',
                increaseCount: 'cart/increaseCount',
                reduceCount: 'cart/reduceCount'
            })
        }
    };

</script>
<style>

    .rotate-enter {
        transform: rotateY(90deg);
    }
    
    .rotate-leave {
        transform: rotateY(-90deg);
    }

    .rotate-enter-active, .rotate-leave-active {
        transition: transform 0.5s ease;
    }

    .color-white {
        color: #fff;
    }

</style>