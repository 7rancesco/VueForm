import { FormSchema } from "../FormSchema";

export const formGET = {
    value: ( e : Event ) => {
        return (e.target as HTMLInputElement).value;
    },
    inputText : ( name : string ) => {
        if(FormSchema.fields.find(e => e.inputText?.label === name)){
            return FormSchema.fields.find(e => e.inputText?.label === name)?.inputText
        }
    },
    inputNumber : ( name : string ) => {
        if(FormSchema.fields.find(e => e.inputNumber?.label === name)){
            return FormSchema.fields.find(e => e.inputNumber?.label === name)?.inputNumber
        }
    },
    inputButton : ( name : string ) => {
        if(FormSchema.fields.find(e => e.inputButton?.text === name)){
            return FormSchema.fields.find(e => e.inputButton?.text === name)?.inputButton
        }
    },
    inputSelect : ( name : string ) => {
        if(FormSchema.fields.find(e => e.inputSelect?.label === name)){
            return FormSchema.fields.find(e => e.inputSelect?.label === name)?.inputSelect
        }
    }
}