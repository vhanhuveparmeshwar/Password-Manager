// object Accessing
let person = {
    firstName: "Rahul",
    lastName: "Attuluri",
    age: 28,
    "1": "value1",
    "my choice": "value2",
  };
  
  console.log(person["firstName"]);
  console.log(person.firstName);

  // Variable as a Key
  
  let a = "firstName";
  console.log(person[a]);  
  console.log(person.a); 


// Object Destructuring

let { gender, age } = person;
console.log(gender); 

// Modifying Objects

person.firstName = "Abhi";
console.log(person.firstName);

person["firstName"] = "Abhi";
console.log(person["firstName"]);

// Adding Object Property

person.gender = "Male";
console.log(person);

person["gender"] = "Male";
console.log(person);


//  Function as a Value
var person2 = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  run: function () {
    console.log("Start Running.");
  },
  habits: ["Playing Chess", "Singing", "Dancing"],
  car: {
    name: "Audi",
    model: "A6",
    color: "White",
  },
};

person2.run();

// Array as a Value

console.log(person2.habits[0]); 
console.log(person2["habits"][1]);

//  Object as a Value

console.log(person2.car.name);  
console.log(person2.car["model"]);