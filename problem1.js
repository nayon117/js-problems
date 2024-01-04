
// find the largest number of an array
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
const find = findLargest(arr)
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
console.log(biggestFriend(friends));