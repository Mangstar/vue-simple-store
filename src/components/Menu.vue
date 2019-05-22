<template>
    <nav class="navigation">
        <ul class="main-menu list-group flex-row ml-2 mb-4">
            <router-link
                        v-for="item in getMenu" 
                        :to="{name: item.route}" 
                        :key="item.title" 
                        tag="li"
                        class="list-group-item mr-1"
                        active-class="active"
                        exact>
                <a>{{ item.title }}</a>
            </router-link>
        </ul>
    </nav>
</template>
<script>

    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters('menu', {
                getMenu: 'getMenu'
            })
        }
    }
</script>
<style>
    .active a {
        color: #fff !important;
        background-color: #007bff;
    }
</style>