<template>
    <div class="col-xs-12 col-sm-10 col-md-6 col-lg-4 mt-2 product-elem">
        <div class="product-elem-inner">
            <slot name="default"></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    img {
        max-width: 100%;
    }

    .product-elem-inner {
        padding-top: 10px;
        padding-bottom: 10px;
        border: 3px solid #333;
    }
</style>