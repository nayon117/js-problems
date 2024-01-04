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
