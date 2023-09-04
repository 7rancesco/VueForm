interface Option {
    label: string | number | boolean,
    value: string | number,
}


export const SearchIn = ( text : string, array : Option[] ) => {
    if(text.length > 0){
        const output : Option[] = [];
        array.forEach(element => {
            if(element){
                const content = element.label.toString().toLowerCase();
                const t = text.toLowerCase();
                const found = content.search(t);
                if(found >= 0){
                    const isPushed = output.find(e => e === element);
                    if(!isPushed)
                    output.push(element)
                }
            }
        });        

        return output
    }
}