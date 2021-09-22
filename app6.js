function FindMaxConsecutive1s (arr) {
//     let max = 0;
//     let count = 0;

//     arr.forEach(element => {
//         if (element != 1 && element != 0) {
//             throw new Error(-1);
//         }
//         if (element == 1) {
//             count+=+element;   

//         } else if (element == 0) {
//             count = 0;   
//         } 
//         // console.log("Max is: " + max);
//         // console.log("Count is: " + count);
//         max = Math.max(max, count);             
//         });
//     return max;

    if (/[^0-1]/g.test(arr.join(''))) {
        throw new Error(-1)
    }
    return arr.join('')
              .split('0')
              .reduce((acumulador, elemento)=> Math.max(acumulador, elemento.length),0)
}
export {FindMaxConsecutive1s}