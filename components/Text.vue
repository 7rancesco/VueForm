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

    <div v-if="!props.schema.hide" class="form_component_container">
        <div class="form_component">
            <span style="color: red;">{{ props.schema.messageError }}</span>
            <label for="">{{ props.schema.label }}<span v-if="props.schema.required" style="color:gray;">*</span></label>
            <input v-model="props.schema.data" type="text" @keyup="props.schema.onChange">
            <span style="color: gray;">{{ props.schema.help }}</span> 
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

    input{
        font-size: 20px;
    }

</style>
