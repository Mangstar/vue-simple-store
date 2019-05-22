<template>
    <div>
        <form class="form" @submit.prevent>

            <app-input
                        v-for="(input, index) in checkoutForm"
                        :key="input.id"
                        :type="input.type"
                        :placeholder="input.placeholder"
                        :name="input.name"
                        :label="input.label"
                        :value="input.value"
                        :pattern="input.pattern"
                        @updated="onInputUpdate($event, index)">
            </app-input>

            <button
                    type="submit"
                    class="btn btn-primary"
                    @click="sendForm">
                Отправить
            </button>

        </form>
    </div>
</template>
<script>

    import FormInput from './FormInput';
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        components: {
            'app-input': FormInput
        },
        computed: {
            ...mapGetters({
                checkoutForm: 'checkout/checkoutForm'
            })
        },
        methods: {
            ...mapMutations({
                updateInputValue: 'checkout/updateInputValue'
            }),
            onInputUpdate( e, i ){
                this.updateInputValue({
                    index: i,
                    value: e
                });
            }
        }
    }
</script>
<style>

</style>