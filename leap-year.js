const checkLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
const year = 2024;
const check = checkLeapYear(year)
console.log(check);