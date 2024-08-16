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
// console.log(person.greet())

// Problem 2: Nested Objects

function createStudent(name, age, marks) {
   let student = {
    name : name,
    age:age,
    marks:marks,
    getAverageMarks:function(){
      let total = 0;
      let subjectCount = 0
      for(let subject in this.marks) {
        total += this.marks[subject]
        subjectCount ++
      }
      return total /subjectCount
    }
   }
   return student;
}

let student = createStudent("Bob", 20, { math: 80, english: 75, science: 85 });
console.log(student.getAverageMarks()); // Output: 80

// Problem 3: Working with Object Methods
function listProperties(obj) {
  let properties = [];
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          properties.push(`${key}: ${obj[key]}`);
      }
  }
  return properties;
}

let car = { brand: "Toyota", model: "Camry", year: 2020 };
console.log(listProperties(car)); 
// Output: ["brand: Toyota", "model: Camry", "year: 2020"]
