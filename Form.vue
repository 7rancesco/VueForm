<script setup lang="ts">

    import {FormSchema} from './FormSchema';

    import Text from './components/Text.vue';
    import Number from './components/Number.vue';
    import Select from './components/Select.vue';
    import Button from './components/Button.vue';


</script>

<template>
    <div class="form_container">

        <div v-for="input in FormSchema.fields">
            <Text v-if="input.inputText" :schema="input.inputText"></Text>
            <Number v-if="input.inputNumber" :schema="input.inputNumber"></Number>
            <Select v-if="input.inputSelect" :schema="input.inputSelect"></Select>
            <Button v-if="input.inputButton" :schema="input.inputButton"></Button>
        </div>

    </div>

</template>

<style scoped>

    .form_container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        align-content: center;
        column-gap: 1vw;
        row-gap: 1vw;
        padding: 2vw;
    }

    .form_component_container{
        flex-grow: 1;
        min-width: 46vw;
        max-width: 46vw;
    }    

    @media (max-width: 700px){
        .form_component_container{
            flex-grow: 1;
            min-width: 96vw;
        }          
    }

</style>