<script setup lang="ts">

    interface InputText {
        schema:{
            label: string,
            data?: string,
            onChange?: Function,
            hide?: boolean,
            required?: boolean,
            help?: string,
            messageError?: string            
        }
    }

    const props = defineProps<InputText>();

</script>

<template>

    <div v-if="!props.schema.hide">
        <span style="color: red;">{{ props.schema.messageError }}</span>
        <label for="">{{ props.schema.label }}</label>
        <input v-model="props.schema.data" type="text" @change="props.schema.onChange">
        <span style="color: gray;">{{ props.schema.help }}</span> 
    </div>
    
</template>

<style scoped>

</style>
