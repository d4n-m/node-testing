function FindRepeatChar (string){
    string = string.toUpperCase();
    string = string.split(' ').join('');

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == string.charAt(i+1)) {
            return i;
        } 
    } return -1;
}

export {FindRepeatChar}