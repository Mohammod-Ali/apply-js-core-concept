function isLeapYear(year){
    const remainder = year % 4;
    if (remainder == 0){
        return true
    }
    else{
        return false
    }
}

const isMyYearLeapYear = isLeapYear(2020);
console.log(isMyYearLeapYear)