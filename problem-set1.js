// Write a function that takes a string and returns it reversed.
const reverseString = (str) =>{
   return str.split('').reverse().join('')
}

console.log(reverseString('hello'))