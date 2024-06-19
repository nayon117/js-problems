//1. Write a function to find the factorial of a number using recursion.

const factorialNum = (num) =>{
    if ( num ===0) return 1;
    return num * factorialNum(num -1)
}
// console.log(factorialNum(5))

//2. Write a function to find the longest word in a string.

const longestWord = (str) =>{
    let words = str.split(' ')
    let longest = ''
    for (let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest
}
// console.log(longestWord('Nayon is the surname'));

//3. Write a function that takes a string and a character, and returns the number of times the character appears in the string.

const strChar = (str,char) =>{
    let count = 0;
    for (let c of str){
        if(c===char) count++
    }
    return count;
}
// console.log(strChar('Nayon','N'));

//4. Write a function to remove duplicates from an array.

function removeDuplicate (arr){
    return [...new Set(arr)]
}
// console.log(removeDuplicate([4,5,3,4,3,7]));

//5. Write a function to flatten a nested array.
function flatten (arr) {
    return arr.flat(Infinity)
}


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