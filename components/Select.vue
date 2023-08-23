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
            hide?: boolean,
            required?: boolean,
            help?: string,
            messageError?: string
        }
    }

    const props = defineProps<InputSelect>();

</script>

<template>

    <div v-if="!props.schema.hide">
        <span style="color: red;">{{ props.schema.messageError }}</span>
        <label for="">{{ props.schema.label }} <span v-if="props.schema.required"></span></label>
        <select v-model="props.schema.data" :multiple="props.schema.multiple" @change="props.schema.onChange">
            <option v-for="o in props.schema.options" :value="o.value">{{ o.label }}</option>
        </select>
        <span style="color: gray;">{{ props.schema.help }}</span>        
    </div>    

</template>

<style scoped>

</style>
