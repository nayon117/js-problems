// validate email address
const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email"));   // false

// validate phone number
const validatePhoneNumber = (phone) => {
    const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
    return regex.test(phone);
};

console.log(validatePhoneNumber("(123) 456-7890")); // true
console.log(validatePhoneNumber("123-456-7890"));   // false


// extract digits from a string
const extractDigits = (str) => {
    return str.match(/\d+/g);
};

console.log(extractDigits("I have 2 apples and 3 bananas.")); // ['2', '3']

