// Count Vowels in a String
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  // Merge Two Sorted Arrays
  function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
  }

  // Capitalize the First Letter of Each Word
  function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Generate a Random Integer Between Two Values
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  