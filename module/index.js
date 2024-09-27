// module calculator
// add.js
export function add(a, b) {
    return a + b;
}

// subtract.js
export function subtract(a, b) {
    return a - b;
}

// main.js
import { add } from './add.js';
import { subtract } from './subtract.js';

console.log(add(10, 5));    // 15
console.log(subtract(10, 5)); // 5

// module for utilities
export function maxNumber(arr) {
    return Math.max(...arr);
}

export function isEven(num) {
    return num % 2 === 0;
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

// main.js
import { maxNumber, isEven, reverseString } from './utils.js';

console.log(maxNumber([10, 20, 5])); // 20
console.log(isEven(6));              // true
console.log(reverseString("hello")); // "olleh"



// default export for greeting
// greet.js
export default function greet(name) {
    return `Hello, ${name}!`;
}

// main.js
import greet from './greet.js';

console.log(greet("Hasibul")); // Output: Hello, Hasibul!
console.log(greet("Nayon"));   // Output: Hello, Nayon!
