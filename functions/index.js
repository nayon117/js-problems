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

console.log(findMax([1, 3, 7, 2, 5])); // Output: 7

