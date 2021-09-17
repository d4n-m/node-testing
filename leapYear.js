function leapYear(year){
    if(parseInt(Number(year))==year){
        if(year%4==0){
            if(year%100==0 && year%400!==0)
                return false
           else return true
        }
        else return false;
    }
    else return "This is not a year"
}
export {leapYear};
