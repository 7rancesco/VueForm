<script setup lang="ts">

    import Text from './Text.vue';
    import Number from './Number.vue';
    import Select from './Select.vue';
    import Button from './Button.vue';

    interface InputText {
        label: string,
        data?: string,
        onChange?: Function,
        hide?: boolean,
        required?: boolean,
        help?: string,
        messageError?: string
    }

    interface InputNumber {
        label: string,
        data?: number,
        onChange?: Function,
        hide?: boolean,
        required?: boolean,
        help?: string,
        messageError?: string
    }

    interface InputSelect {
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

    interface InputButton {
        type: "button" | "submit" | "reset",
        text: string,
        colorText: string,
        colorBG: string,
        onClick?: Function,
        disabled?: boolean
    }

    interface Field {
        inputText?: InputText,
        inputNumber?: InputNumber,
        inputSelect?: InputSelect,
        inputButton?: InputButton
    }

    interface Props {
        schema: {
            label: string,
            fields: Field[][]
        }
    }

    const props = defineProps<Props>();

    const addCollection = () => {
        const collection = props.schema.fields[0];
        const newCollection : Field[] = [];

        collection.forEach(element => {
            if(element.inputText){
                newCollection.push({
                    inputText: {
                        label: element.inputText.label,
                        help: element.inputText.help,
                        required: element.inputText.required,
                        messageError: element.inputText.messageError,
                        onChange: element.inputText.onChange,
                    }
                });
            }
            if(element.inputNumber){
                newCollection.push({
                    inputNumber: {
                        label: element.inputNumber.label,
                        help: element.inputNumber.help,
                        required: element.inputNumber.required,
                        messageError: element.inputNumber.messageError,
                        onChange: element.inputNumber.onChange,
                    }
                });
            }
            if(element.inputSelect){
                newCollection.push({
                    inputSelect: {
                        label: element.inputSelect.label,
                        options: element.inputSelect.options,
                        help: element.inputSelect.help,
                        required: element.inputSelect.required,
                        messageError: element.inputSelect.messageError,
                        onChange: element.inputSelect.onChange,
                    }
                });
            }
        });

        props.schema.fields.push(newCollection)
    }

    const removeCollection = (field : Field[]) => {
        const index = props.schema.fields.indexOf(field);
        props.schema.fields.forEach((element, i) => {
            if(i === index){
                if(props.schema.fields.length > 1){
                    props.schema.fields = props.schema.fields.filter(e => e !== element);
                }
            }
        });
    }

</script>

<template>
    <div style="width: 90vw; margin-top: 20vh;"><h2>{{ props.schema.label }}</h2></div>

        <div class="form_container collection_container" v-for="field in props.schema.fields">

            <div v-for="input in field">
                <Text v-if="input.inputText" :schema="input.inputText"></Text>
                <Number v-if="input.inputNumber" :schema="input.inputNumber"></Number>
                <Select v-if="input.inputSelect" :schema="input.inputSelect"></Select>
                <Button v-if="input.inputButton" :schema="input.inputButton"></Button>
            </div>
            <div class="form_component">
                <button @click="removeCollection(field)">Remove</button>
            </div>
        </div>    

    <div style="width: 90vw; margin-bottom: 10vh; align-items: center; border-bottom: solid 1px gray;" class="form_component">
        <button @click="addCollection()" style="border-color: rgb(114, 131, 182); background: rgb(28, 105, 188); color:white;">Add {{ props.schema.label }}</button>
    </div>
    
</template>

<style scoped>
    .form_container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        align-content: center;
        column-gap: 1vw;
        row-gap: 1vw;
        padding: 2vw;
    }

    .form_component_container{
        flex-grow: 1;
        min-width: 44vw;
        max-width: 44vw;
    }    

    @media (max-width: 700px){
        .form_component_container{
            flex-grow: 1;
            min-width: 96vw;
        }          
    }    

    .form_component{
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 2vw;
        min-height: 5vh;
        justify-content: center;
        align-items: end;
        min-width: 85vw;
        max-width: 85vw;
    }    
    .form_component > button {
        width: 30vw;
        height: 5vh;
        border-radius: 5px;
        background-color: white;
        border: solid 1px red;
    }

    .form_component > button:hover{
        cursor: pointer;
    }

    .collection_container:nth-child(odd){
        background: rgba(241, 237, 241, 0.389);
        border-top: solid 1px rgba(128, 128, 128, 0.183);
        border-bottom: solid 1px rgba(128, 128, 128, 0.335);
    }        
    .collection_container:nth-child(even){
        background: rgba(237, 239, 241, 0.322);
    }        

</style>