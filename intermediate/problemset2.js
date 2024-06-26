// Check if a Number is Prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  // Get Unique Values from an Array
  function getUniqueValues(arr) {
    return [...new Set(arr)];
  }
  