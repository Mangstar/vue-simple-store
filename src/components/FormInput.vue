<template>
    <div class="form-group text text-left">
        <label>
            {{ label }}
            <transition v-if="activated">
                <icon
                        :name="iconsStyle.name" 
                        :class="iconsStyle.classes"></icon>
            </transition>
        </label>
        <input 
                :type="type"
                :placeholder="placeholder"
                :name="name"
                :label="label"
                :value="value"
                class="form-control"
                @input="onInput($event)">
    </div>
    
</template>
<script>

    import Icon from 'vue-awesome'

    import Check from 'vue-awesome/icons/check'
    import Times from 'vue-awesome/icons/times'

    export default {
        name: 'app-form-input',
        components: {
            'icon': Icon
        },
        props: {
            type: {
                type: String
            },
            placeholder: {
                type: String
            },
            name: {
                type: String
            },
            label: {
                type: String
            },
            value: {
                type: String
            }
        },
        data(){
            return {
                activated: this.value !== '',
                pattern: this.$attrs.pattern
            };
        },
        computed: {
            isValid(){
                return this.pattern.test( this.value );
            },
            iconsStyle(){
                return {
                    name: this.isValid ? 'check' : 'times',
                    classes: this.isValid ? 'text-success' : 'text-danger'
                };
            }
        },
        methods: {
            onInput( e ){
                this.activated = true;

                this.$emit('updated', e.target.value);
            }
        },
        watch: {
            isValid(){
                this.$emit('is-valid', {
                    valid: this.isValid
                });
            }
        }
    }
</script>
<style>

</style>