const person_1 = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(`My name is ${this.name}`);
  }
};


class Person {
    constructor(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }

    sayHi() {
        console.log(`My name is ${this.name}`);
    }
}

const person_2 = new Person("John", 30, false);
const person_3 = new Person("Jane", 25, true);

console.log(person_2);

person_2.sayHi();
person_3.sayHi();

