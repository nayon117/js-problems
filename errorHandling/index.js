function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message); // Output: Cannot divide by zero
}

// handle error in async function
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchData();


// input validation with custom error message
function validateAge(age) {
    if (isNaN(age) || age < 0) {
        throw new Error("Invalid age");
    }
    return age;
}

try {
    validateAge(-5); // Invalid age
} catch (error) {
    console.log(error.message);
}
