function SumaArray (array){
    let sum = 0;

    array.forEach(element => {
        element = parseInt(element);
        if (element>0) {
            sum += element;
        }
    });
    return sum;
}

export {SumaArray};