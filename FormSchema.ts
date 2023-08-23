import { reactive } from "vue";

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
    onClick?: Function,
    disabled?: boolean
}

interface Field {
    inputText?: InputText,
    inputNumber?: InputNumber,
    inputSelect?: InputSelect,
    inputButton?: InputButton,
}

interface Form {
    fields: Field[],
    getData: Function,
    checkRequired: Function,
}

export const FormSchema = reactive<Form>({
    fields: [],
    getData: () => {
        const datas : {label: string, value: any}[] = [];
        FormSchema.fields.forEach(field => {
            const inputs = [
                field.inputText,
                field.inputNumber,
                field.inputSelect,
            ];
            inputs.forEach(input => {
                let data = input;
                if(!data?.hide){
                    const label = data?.label;
                    const value = data?.data;
                    if(label && value)
                    datas.push({label: label, value: value})
                }                
            });
        });
        return datas
    },
    checkRequired: ( message : string ) => {
        const datas : {label: string, value: boolean}[] = [];
        FormSchema.fields.forEach(field => {
            const inputs = [
                field.inputText,
                field.inputNumber,
                field.inputSelect,
            ];
            inputs.forEach(input => {
                let data = input;
                if(!data?.hide && data?.required){
                    const label = data?.label;
                    const value = data?.data;
                    if(label){
                        if(value){
                            datas.push({label: label, value: true})
                            if(input){
                                input.messageError = '';
                            }
                        } else {
                            datas.push({label: label, value: false})
                            if(input){
                                input.messageError = message;
                            }
                        }
                    }
                }
            });
        });
        let output = true;
        datas.forEach(element => {
            if(element.value === false){
                output = false;
            }
        });
        return output
    },
});

// onChange Example
// onChange: (e : Event) => {
//     const value = (e.target as HTMLInputElement).value;
//     const input = FormSchema.fields.find(e => e.inputNumber?.label === 'Numero');
//     if(input?.inputNumber){
//       if(value === 'hide'){
//           input.inputNumber.hide = true;
//       } else {
//           input.inputNumber.hide = false;
//       }
//     }
//   },