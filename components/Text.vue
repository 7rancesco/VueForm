<script setup lang="ts">

    interface Props {
        schema: InputText
    }

    const props = defineProps<Props>();

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
        border: solid 1px var(--border);
        border-radius: 5px;
        padding: 2vw;
        min-height: 15vh;
        justify-content: center;
    }

    label{
        font-size: 1.3rem;
        color: var(--color);
    }    

    input{
        font-size: 19px;
        background: rgba(0, 0, 0, 0.058);
        border: solid 1px var(--border);
        color: var(--color);
        border-radius: 5px;
        height: 4vh;
    }

</style>
