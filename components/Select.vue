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

    <div v-if="!props.schema.hide" class="form_component_container">
        <div class="form_component">
            <span style="color: red;">{{ props.schema.messageError }}</span>
            <label for="">{{ props.schema.label }}<span v-if="props.schema.required" style="color:gray;">*</span></label>
            <select v-model="props.schema.data" :multiple="props.schema.multiple" @change="props.schema.onChange">
                <option v-for="o in props.schema.options" :value="o.value">{{ o.label }}</option>
            </select>
            <span class="form_help" style="color: gray;">{{ props.schema.help }}</span>
        </div> 
    </div>   

</template>

<style scoped>

    .form_component{
        display: flex;
        flex-direction: column;
        border: solid 1px rgb(221, 221, 221);
        border-radius: 5px;
        padding: 2vw;
        min-height: 15vh;
        justify-content: center;
    }

    label{
        font-size: 1.8vw;
        color: rgb(40, 51, 65);
    }

    select{
        font-size: 20px;
        min-height: 30px;
    }    

</style>
