function factorial(number){
    let i = number
    let result = 1;
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result
}
const num = 8;
const output = factorial(num);
console.log(output)