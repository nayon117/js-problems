// Day 1: introduction of Array
// Reverse an array
const reverseArray = (arr) =>{
    let reverseArr = []
    for(let i = arr.length-1; i>=0; i--){
        reverseArr.push(arr[i])
    }
    return reverseArr;
}

// sum of all items
const sumArray = (arr) =>{
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

const arr = [1,2,3,4,5,6]
// console.log(sumArray(arr))

// Find the maximum
const findLargest = (arr) =>{
    let largestArr = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largestArr){
            largestArr=arr[i]
        }
    }
    return largestArr;
}
const arr1 = [1,2,3,4,5,6]
// console.log(findLargest(arr))

// Day 2: Advanced array problems
// Problem 1: Rotate an Array
const rotateArray = (arr,k) =>{
    k = k % arr.length
    let endPart = arr.splice(-k)
    arr.unshift(...endPart)
    return arr;
}
// console.log(rotateArray([1, 2, 3, 4, 5,6,7], 3)); // Output: [4, 5, 1, 2, 3]

/*
Problem 2: Find the Missing Number in an Array

Problem Statement:
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array. */

const findMissingNumber = (arr) =>{
    let n = arr.length;
    let expectedSum = n*(n+1)/2
    let actualSum = arr.reduce((sum,num)=>(sum+num),0)
    return expectedSum - actualSum
}
// console.log(findMissingNumber([0, 1, 3, 4, 5])); // Output: 2

/*
Problem 3: Remove Duplicates from Sorted Array

Problem Statement:
Given a sorted array, remove the duplicates in place such that each element appears only once and returns the new length. */

const removeDuplicates = (arr) =>{
    let uniqueIndex = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] !== arr[uniqueIndex]){
            uniqueIndex++
            arr[uniqueIndex] = arr[i]
        }
    }
    return uniqueIndex+1
}
let nums = [1, 1, 2, 2, 3, 4, 4];
// console.log(removeDuplicates(nums));

/*
Problem 4: Move Zeroes
Write a function moveZeroes that takes an array and moves all zeroes to the end, maintaining the order of the other elements. */

const moveZeroes = (arr) =>{
    let nonZeroIndex = 0;
    for(let i =0 ; i<arr.length; i++){
        if(arr[i] !== 0){
            [arr[nonZeroIndex],[arr[i]]] = [arr[i], [arr[nonZeroIndex]]]
            nonZeroIndex++
        }
    }
    return arr;
}
// console.log(moveZeroes([0, 1, 0, 3, 12]));

/*
Problem 5: Intersection of Two Arrays
Write a function intersect that takes two arrays and returns their intersection.*/

const intersect = (arr1,arr2) => {
    let set1 = new Set(arr1)
    let intersection = new Set()

    for (let num of arr2) {
        if(set1.has(num)){
            intersection.add(num)
        }
    }
    return intersection
}

console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]