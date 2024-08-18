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

console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Output: 6



