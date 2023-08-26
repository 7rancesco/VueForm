export const formSET = {
    minLength: (input : any, length : number, message : string) => {
        if(input.data.length < length){
            input.messageError = message;
            return true
        } else {
            input.messageError = '';
            return false
        }
    }
}