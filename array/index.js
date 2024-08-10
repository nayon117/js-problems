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