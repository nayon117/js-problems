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
