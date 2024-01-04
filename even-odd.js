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