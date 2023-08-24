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
        });

        props.schema.fields.push(newCollection)
    }

    const removeCollection = (field : Field[]) => {
        const index = props.schema.fields.indexOf(field);
        props.schema.fields.forEach((element, i) => {
            if(i === index){
                props.schema.fields = props.schema.fields.filter(e => e !== element);
            }
        });
    }

</script>

<template>
    <div style="width: 90vw;">{{ props.schema.label }}</div>

    <div class="form_container" v-for="field in props.schema.fields">

        <div v-for="input in field">
            <Text v-if="input.inputText" :schema="input.inputText"></Text>
            <Number v-if="input.inputNumber" :schema="input.inputNumber"></Number>
            <Select v-if="input.inputSelect" :schema="input.inputSelect"></Select>
            <Button v-if="input.inputButton" :schema="input.inputButton"></Button>
        </div>
        <div>
            <button @click="removeCollection(field)">Remove</button>
        </div>
    </div>    

    <div style="width: 90vw;">
        <button @click="addCollection()">Add</button>
    </div>
    
</template>

<style scoped>

</style>