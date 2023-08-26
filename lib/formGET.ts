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
    inputButton : ( name : string ) => {
        if(FormSchema.fields.find(e => e.inputButton?.text === name)){
            return FormSchema.fields.find(e => e.inputButton?.text === name)?.inputButton
        }
    }
}