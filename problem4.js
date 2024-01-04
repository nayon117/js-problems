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