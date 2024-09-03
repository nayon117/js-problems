function outer() {
    let outerVar = "I am outside!";
    function inner() {
        console.log(outerVar); // Can access outerVar
    }
    inner();
}
outer(); // Output: "I am outside!"

function multiplyBy(n) {
    return function (x) {
        return n * x;
    };
}
