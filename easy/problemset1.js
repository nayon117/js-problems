// find even or odd
const evenOdd = (num) => {
    const remainder = num % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const find = evenOdd(105)
// console.log(find);

const checkLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
const year = 2024;
const check = checkLeapYear(year)
// console.log(check);

// 3. find the largest number of an array
function findLargest(x) {
    let largest = x[0]
    for (let i = 1; i < x.length; i++){
      const currentItem = x[i]
      if (currentItem > largest) {
        largest = currentItem
      }
    }
    return largest;
  }
  
  const arr = [5, 12, 23, 45, 23, 24]
  const finds = findLargest(arr)
  // console.log(find);
  
  // find biggest name friend
  
  const biggestFriend = (friends) => {
    let biggestFriend = friends[0]
    for (let i = 1; i < friends.length; i++){
      if (friends[i].length > biggestFriend.length) {
        biggestFriend=friends[i]
      }
    }
    return biggestFriend;
  }
  
  const friends = ["arif", "sakil", "sakib", "asiqur", "mossaddek","alim"]
//   console.log(biggestFriend(friends));

// 4
// show all the even number between 412 to 496
for (let i = 412; i <= 496; i+=2){
    // console.log(i);
}

// show all the odd number between 101 to 123
for (let i = 101; i <= 123; i += 2){
    // console.log(i);
}

// convert inch to feet
const inchToFeet = (inch) => {
    const result = inch / 12;
    return result;
}
const inch = 144;
const feet = inchToFeet(inch)
// console.log(feet);

// convert miles to kilometer
const milesToKilometer = (miles) => {
    const result = miles * 1.6
    return result;
}

const miles = 12;
const kilometer = milesToKilometer(miles)
// console.log(kilometer);

const factorial = (number) => {
    let result = 1; 
    for (let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(7);
console.log(result);


// run a loop from 30 to 86 this loop will stop if the values get higher than 44;

for (let i = 30; i <= 86; i++){
    if (i > 44) {
        break;
    }
    // console.log(i);
}

// write the prices of the books that you have display the prices if the prices is lower than 200;
let bookPrices = [223, 234, 167, 453, 123, 167]

for (let i = 0; i < bookPrices.length; i++){
    let bookPrice = bookPrices[i]
    if (bookPrice > 200) {
        continue;
    }
    console.log(bookPrice);
}