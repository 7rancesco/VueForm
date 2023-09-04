import { reactive } from "vue";

export const FormSchema = reactive<Form>({
    fields: [],
    getData: () => {
        const datas : {label: string, value: any | any[] }[] = [];
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

            //
            if(field.collection){
                const collectionData : {label: string, value: any[]} = {label: field.collection.label, value: []};
                field.collection.fields.forEach(fields => {
                    const values : any[] = [];
                    fields.forEach(element => {
                        const inputs = [
                            element.inputText,
                            element.inputNumber,
                            element.inputSelect,
                        ];
                        
                        inputs.forEach(input => {
                            let data = input;
                            if(!data?.hide){
                                const label = data?.label;
                                const value = data?.data;
                                if(label && value)
                                values.push({label: label, value: value})
                            }                
                        });
                        
                    });
                    collectionData.value.push(values)
                });
                datas.push(collectionData)
            }
            //
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

            //
            if(field.collection){
                field.collection.fields.forEach(fields => {
                    fields.forEach(element => {
                        const inputs = [
                            element.inputText,
                            element.inputNumber,
                            element.inputSelect,
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
                });
            }
            //
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