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