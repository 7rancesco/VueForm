<script setup lang="ts">

    interface InputSelect {
        schema: {
            label: string,
            data?: string | number | boolean | string[] | number[] | boolean[],
            options: {
                label: string | number | boolean,
                value: string | number,
            }[],
            multiple?: boolean,
            onChange?: Function,
            hide?: boolean   
        }
    }

    const props = defineProps<InputSelect>();

</script>

<template>

    <div v-if="!props.schema.hide">
        <select v-model="props.schema.data" :multiple="props.schema.multiple" @change="props.schema.onChange">
            <option v-for="o in props.schema.options" :value="o.value">{{ o.label }}</option>
        </select>
    </div>    

</template>

<style scoped>

</style>
