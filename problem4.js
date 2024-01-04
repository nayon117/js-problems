// sum of an array 
const getSum = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        sum = sum + element;
    }
    return sum;
}
const arr = [3, 4, 4, 5, 6]
const sum = getSum(arr)
// console.log(sum);

// find odd numbers sum;
const getOddnumbers = (numbers) => {
    const oddNumber = []
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if (element % 2 !== 0) {
            oddNumber.push(element)
        }
    }
    return oddNumber;
}

// even number
const findEven = (numbers) => {
    const evenNumber = []
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if (element % 2 === 0) {
            evenNumber.push(element)
        }
    }
    return evenNumber;
}