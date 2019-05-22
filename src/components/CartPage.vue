<template>
    <div>
        <table class="table table-bordered bg-light">
            <thead>
                <tr>
                    <th>Название товара</th>
                    <th>Количество штук</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.cnt }}</td>
                    <td>{{ Number(product.price) * Number(product.cnt) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

    import Cart from './Card';
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                products: 'cart/productsId'
            })
        }
    }
</script>
<style>

</style>