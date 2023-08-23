<script setup lang="ts">

    import {FormSchema} from './FormSchema';

    import Text from './components/Text.vue';
    import Number from './components/Number.vue';
    import Select from './components/Select.vue';
    import Button from './components/Button.vue';


</script>

<template>

    <div v-for="input in FormSchema.fields">
        <Text v-if="input.inputText" :schema="input.inputText"></Text>
        <Number v-if="input.inputNumber" :schema="input.inputNumber"></Number>
        <Select v-if="input.inputSelect" :schema="input.inputSelect"></Select>
        <Button v-if="input.inputButton" :schema="input.inputButton"></Button>
    </div>

</template>

<style scoped>

</style>
