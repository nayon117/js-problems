// Find the Intersection of Two Arrays

const findIntersection = (arr1,arr2) =>{
    return arr1.map(element=>arr2.includes(element))
}