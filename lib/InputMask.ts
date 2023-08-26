const mask : {[key : string] : Mask} = {
    "telefono" : {
        check: ( str : string ) => {

            const test : Check[] = [
                {method: "exact", value: '+'},
                {method: "exact", value: '3'},
                {method: "exact", value: '9'},
                {method: "exact", value: ' '},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
            ];
            
            return outputMask(str, test)
        }
    },
    "codice fiscale" : {
        check: ( str : string ) => {

            const test : Check[] = [
                {method: "regExp", value: /[A-Z]/g},
                {method: "regExp", value: /[A-Z]/g},
                {method: "regExp", value: /[A-Z]/g},
                {method: "regExp", value: /[A-Z]/g},
                {method: "regExp", value: /[A-Z]/g},
                {method: "regExp", value: /[A-Z]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[A-Z]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[A-Z]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[0-9]/g},
                {method: "regExp", value: /[A-Z]/g},
            ];
            
            return outputMask(str, test)
        }
    },
}
















interface Mask {
    check: Function
}

interface Check {
    method: "regExp" | "exact",
    value: string | number | RegExp
}

const strToArray = ( str : string ) => {
    return str.split('');
}

const outputMask = ( str : string, test : Check[] ) => {
    const l = test.length;
    let output = '';
    const array = strToArray(str);

    test.forEach((t, i) => {
        if(t.method === "exact"){
            output += t.value;
        } else 
        if(t.method === "regExp") {
            if(array[i]){

                
                if(test[i].value.toString() === '/[A-Z]/g'){
                    array[i] = array[i].toUpperCase();
                }

                if(array[i].match(test[i].value as RegExp)){
                    output += array[i]
                }

            }
        }
    });

    return output.substring(0 , l)
}

export const InputMask = ( input : string , msk : 
        "telefono" |
        "codice fiscale"
    ) => {

    return mask[msk].check(input);

}