function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        console.log(index, element)
    }
    return sum
}

const myNumbers = [12, 38, 32, 34]
getSumOfAnArray(myNumbers)