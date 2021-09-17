function fizzBuzz(number){
    if(isNumber(number)){
        if(number%3==0 || number%5==0){
            if(number%5!=0)
                return "Fizz";
            else if(number%3!=0)
                return "Buzz";
            else 
                return "FizzBuzz";
        }
        else{
            return number;
        }
    } 
    else return "This is not a number";   
}
//function to check if its a number
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

export {fizzBuzz};
