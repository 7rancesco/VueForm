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
    messageError?: string,
    search?: boolean
}

interface InputButton {
    type: "button" | "submit" | "reset",
    text: string,
    colorText: string,
    colorBG: string,
    onClick?: Function,
    disabled?: boolean
}

interface Collection{
    label: string,
    fields: Field[][],
    hide?: boolean
}

interface Field {
    inputText?: InputText,
    inputNumber?: InputNumber,
    inputSelect?: InputSelect,
    inputButton?: InputButton,
    collection?: Collection
}

interface Form {
    fields: Field[],
    getData: Function,
    checkRequired: Function,
}