<script setup lang="ts">

    interface InputNumber {
        schema:{
            label: string,
            data?: number,
            onChange?: Function,
            hide?: boolean,
            required?: boolean,
            help?: string,
            messageError?: string            
        }
    }

    const props = defineProps<InputNumber>();

</script>

<template>
    <div v-if="!props.schema.hide">
        <span style="color: red;">{{ props.schema.messageError }}</span>
        <label for="">{{ props.schema.label }}</label>
        <input type="number" v-model="props.schema.data" @change="props.schema.onChange">
        <span style="color: gray;">{{ props.schema.help }}</span> 
    </div>    
    
</template>

<style scoped>

</style>