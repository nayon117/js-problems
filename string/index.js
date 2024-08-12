// reverse word
const reverseWord = (str) =>{
    return str.split('').reverse().join('')
}

// checking palindrome
const checkPalindrome = (str) =>{
    let reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}

// count vowels
const countVowels = (str) =>{
    let count = 0;
    let vowels = 'aeiouAEIOU'
    for(let char of str) {
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
}
// console.log(countVowels("hello world"));

// Reverse Words in a Sentence
const reverseWords = (sentence) =>{
    return sentence.split(' ').reverse().join(' ')
}
// console.log(reverseWords("Hello World")); // Output: "World Hello"

// Count the Number of letter in a String
const countletters = (str) =>{
    let count = 0;
    for(let char of str){
       if(/[a-zA-Z]/.test(char)){
        count++
       }
    }
    return count;
}

// console.log(countletters('hello world'))

// count the number of words in a string
const countWords = (str) =>{
    return str.split(' ').length
}
// console.log(countWords('hello world its me'))

// Replace All Vowels with a Specific Character

// path 1 

// const replaceVowels = (str,char) =>{
//     let vowels = 'aeiouAEIOU'
//     let result = ''
//     for(let c of str){
//         if(vowels.includes(c)){
//            result += char
//         }else{
//             result += c
//         }
//     }
//     return result 
// }

// path 2 
const replaceVowels = (str,char) =>{
    return str.replace(/[aeiouAEIOU]/g , char)
}


console.log(replaceVowels("hello", "*")); // Output: h*ll*
