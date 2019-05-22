<template>
    <header class="header pt-2">
        <div class="row">
            <div class="col-md-8">
                <h1 class="text text-left">Магазин</h1>
            </div>
            <div class="col-md-4">
                <app-card></app-card>
            </div>
            <div>
                <app-menu></app-menu>
            </div>
        </div>
    </header>
</template>
<script>

    import Card from './Card';
    import Menu from './Menu';

    export default {
        components: {
            'app-card': Card,
            'app-menu': Menu
        }
    }
</script>
<style>

</style>