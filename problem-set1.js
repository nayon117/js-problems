// 1. Write a function that takes a string and returns it reversed.
const reverseString = (str) =>{
   return str.split('').reverse().join('')
}

// console.log(reverseString('hello'))

//2. Write a function to check if a given string is a palindrome.

const palindrome = (str) =>{
    const reversed = str.split('').reverse().join('')
    return reversed === str;
}
// console.log(palindrome('level'));

//3. Write a function that takes an array of numbers and returns the largest number.

const largestNum = (arr) =>{
    return Math.max(...arr)
}
// console.log(largestNum([15,20,5,3]));

//4. Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

const fizzbuzz = () =>{
    for(let i=1 ; i<=100; i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz',i);
        }else if (i%3===0){
            console.log('Fizz',i);
        }else if (i%5===0){
            console.log('Buzz',i);
        }
    }
}
// console.log(fizzbuzz())

//5. Write a function that returns the sum of all numbers in an array.
const sumNum = (arr) =>{
    return arr.reduce((sum,num)=>sum+num,0)
}
console.log(sumNum([3,5,6,7]));