// Problem 1: Calculate Factorial

function factorial(n) {
   if(n===0 || n===1) {
     return 1;
   }else{
        return n * factorial(n-1);
   }

}

// console.log(factorial(5)); // Output: 120

// Problem 2: Find the Largest Number in an Array

function findMax(arr) {
   let max = arr[0]
   for(let i=1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
   }
   return max;
}

// console.log(findMax([1, 3, 7, 2, 5])); // Output: 7

// Problem 3: Check if a String is a Palindrome

function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('')
    return reverseStr ===str
}

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false

// Problem 4: Convert Fahrenheit to Celsius

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
}

// console.log(toCelsius(68)); // Output: 20

// Problem 5: Sum of All Even Numbers in an Array


function sumEvenNumbers(arr) {
    let sum = 0;
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i] %2===0){
            sum += arr[i]
        }
    }
    return sum;
}

// console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Output: 6

// Higher-Order Functions

function higherOrder(fn) {
    return fn();
}

function sayHello() {
    return "Hello, world!";
}

// console.log(higherOrder(sayHello)); // Output: "Hello, world!"


// Problem 6: Filter Out Even Numbers
const filterEvenNumbers = (arr) =>arr.filter(num =>num%2===0)

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]


// Problem 2: Calculate the Sum of an Array

const sumArray = (arr) =>{
    return arr.reduce((acc,num)=>acc+num,0)
}
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Problem 3: Create a Multiplier Function

const createMultiplier = (n) =>{
    return (x)=>{
        return x * n
    }
}

const double = createMultiplier(2);
// console.log(double(5)); // Output: 10

// Problem 4: Square All Numbers

const squareNumbers =(arr)=>arr.map(num=>num*num)

// console.log(squareNumbers([1, 2, 3, 4])); // Output: [1, 4, 9, 16]

// Problem 5: Find Strings with Specific Length

const filterByLength = (arr,n) =>{
    return arr.filter(str=>str.length===n)
}


// console.log(filterByLength(["apple", "banana", "pear", "plum"], 4)); // Output: ["pear", "plum"]


// Problem 6: Convert Array of Strings to Uppercase

const toUpperCaseArray = (arr) => arr.map(str=>str.toUpperCase())


// console.log(toUpperCaseArray(["apple", "banana", "pear"])); // Output: ["APPLE", "BANANA", "PEAR"]






