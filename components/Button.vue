<script setup lang="ts">

    interface InputButton {
        schema:{
            type: "button" | "submit" | "reset",
            text: string,
            onClick?: Function,
            disabled?: boolean,
            colorText: string,
            colorBG: string,
        }
    }

    const props = defineProps<InputButton>();

</script>

<template>

    <div class="form_component_container">
        <div class="form_component">
            <button :style="`color:${props.schema.colorText}; background:${props.schema.colorBG};`" :disabled="props.schema.disabled" :type="props.schema.type" @click="props.schema.onClick">{{ props.schema.text }}</button>
        </div>
    </div>    
    
</template>

<style scoped>

    .form_component{
        display: flex;
        flex-direction: column;
        padding: 2vw;
        align-items: center;
        justify-content: center;
        min-height: 15vh;
    }

    button {
        border: none;
        border-radius: 5px;
        min-height: 6vh;
        font-size: 2.5vh;
        width: auto;
        padding-left: 2.5vh;
        padding-right: 2.5vh;
    }

    button:hover{
        cursor: pointer;
    }

    button[disabled]{
        color: white !important;
        background: rgb(127, 141, 156) !important;
    }

</style>
