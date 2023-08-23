<script setup lang="ts">

    interface InputNumber {
        schema:{
            label: string,
            data?: number,
            onChange?: Function,
            hide?: boolean
        }
    }

    const props = defineProps<InputNumber>();

</script>

<template>
    <div v-if="!props.schema.hide">
        <label for="">{{ props.schema.label }}</label>
        <input type="number" v-model="props.schema.data" @change="props.schema.onChange">
    </div>    
    
</template>

<style scoped>

</style>