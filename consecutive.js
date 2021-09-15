function consecutive(chain){
    let max = 0;
    let count = 0;
    
    for (let element of chain) {
        if (parseInt(element) === 1) {
            count++;
        } else if (parseInt(element) === 0) {
            max = Math.max(max, count);
            count = 0;
        } else return -1;
    }
    max = Math.max(max, count);
    return max;
}

export {consecutive};