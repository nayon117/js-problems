// Problem 1: Create an Object and Manipulate It

function createPerson(name, age, country) {
  let person = {
    name : name,
    age:age,
    country:country,
    greet : function (){
        return `Hello, my name is ${this.name}`
    }
  }
  return person;
}

let person = createPerson("Alice", 25, "Canada");
person.greet(); // Output: Hello, my name is Alice.
console.log(person.greet())
