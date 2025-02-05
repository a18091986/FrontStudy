let person = {
  name: "John",
  age: 30,
  city: "New York",
  isMarried: false,
};

console.log(person);

person.isMarried = true;

console.log(person);

delete person.age;

console.log(person);


// person.sayHi = () => console.log(`My name is ${this.name}`);

// person.sayHi();

// person.sayHi2 = () => console.log(`My name is ${person.name}`);

// person.sayHi2();

person.sayHi3 = function(name) {
  console.log(`My name is ${this.name}`);
}

person.sayHi3();

for (let key in person) {
  console.log(key, person[key]);
}
