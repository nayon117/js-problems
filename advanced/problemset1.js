// Find the Intersection of Two Arrays

const findIntersection = (arr1,arr2) =>{
    return arr1.map(element=>arr2.includes(element))
}

// Write a function that debounces another function by a specified delay.
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  