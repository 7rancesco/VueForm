<script setup lang="ts">

    interface InputButton {
        schema:{
            type: "button" | "submit" | "reset",
            text: string,
            onClick?: Function,
            disabled?: boolean
        }
    }

    const props = defineProps<InputButton>();

</script>

<template>

    <div>
        <button :disabled="props.schema.disabled" :type="props.schema.type" @click="props.schema.onClick">{{ props.schema.text }}</button>
    </div>
    
</template>

<style scoped>

</style>
