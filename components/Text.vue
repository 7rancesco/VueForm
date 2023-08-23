<script setup lang="ts">

    interface InputText {
        schema:{
            label: string,
            data?: string,
            onChange?: Function,
            hide?: boolean
        }
    }

    const props = defineProps<InputText>();

</script>

<template>

    <div v-if="!props.schema.hide">
        <label for="">{{ props.schema.label }}</label>
        <input v-model="props.schema.data" type="text" @change="props.schema.onChange">
    </div>
    
</template>

<style scoped>

</style>
