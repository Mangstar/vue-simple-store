<template>
    <button class="btn" @click="$emit('clicked')">
        <slot name="default">Кнопка</slot>
    </button>
</template>
<script>
    export default {

    }
</script>
<style>

</style>