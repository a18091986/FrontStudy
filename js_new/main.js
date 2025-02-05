console.log("Hello from JavaScript");
let userName;
userName = "Марк";
console.log(userName);
const yearOfBirth = 1990;

// ----------------------------------
//var имеет видимость внутри функции и глобальную видимость, если применять внутри блока кода {}
//let и const имеют видимость внутри функции и блока кода {}
//const не может быть переопределен

function showMessage() {
  var message = "Hello";
  let test = "test";
  console.log(message);
}

// console.log(message);
// console.log(test);
showMessage();

{
  let test = "test";
  var test2 = "test2";
}

// console.log(test);
// console.log(test2);

// ----------------------------------
//типы данных
//number - числа
//string - строки
//boolean - true/false
//null - пустое значение
//undefined - неизвестное значение
//object - объекты
//array - массивы
//function - функции

isTrue = true;
let test = "50";
console.log(typeof test === "string");
console.log(100n + 100000000000000000000000000n);
console.log(Number.MIN_SAFE_INTEGER);

test = "5" == 5;
console.log(test);

test = "5" == 5;
console.log(test);

test = "5";
console.log(`test (${typeof test}) = ${test}`);
console.log(`${test} === 5 (${typeof 5}) = ${test === 5}`);
console.log(`${test} == 5 (${typeof 5}) = ${test == 5}`);

let time = 13;
// -----------------------
if (time < 10) {
  console.log("Good morning");
} else if ((time < 12 && time > 10) || (time > 12 && time < 20)) {
  console.log("Good day");
} else if (time === 12) {
  console.log("Good day equal 12");
} else {
  console.log("Good evening");
}

// ------------------

time = 18;
time < 10
  ? console.log("Goog morning")
  : (time < 12 && time > 10) || (time > 12 && time < 20)
  ? console.log("Good day")
  : time === 12
  ? console.log("Good day equal 12")
  : console.log("Good evening");

// ------------------

time = 21;
let greeting =
  time < 10
    ? "good morning"
    : (time > 10 && time < 12) || (time > 12 && time < 20)
    ? "good day"
    : time == 12
    ? "good day equal 12"
    : "good evening";
console.log(greeting);

// конкатенация строк и щаблонные строки

let name = "Mark";
let age = 30;
console.log("My name is " + name + " and I am " + age + " years old");
console.log(`My name is ${name} and I am ${age} years old`);

// ------------------

test = "test";
console.log(`test.length = ${test.length}`);
console.log(`test.toUpperCase() = ${test.toUpperCase()}`);
console.log(`test.toLowerCase() = ${test.toLowerCase()}`);
console.log(`test.charAt(2) = ${test.charAt(2)}`);
console.log(`test.indexOf("t") = ${test.indexOf("t")}`);

// ------------------Функции function declaration
// можем вызывать функцию до ее объявления
//

showMessage((message = "Test"));

function showMessage(message) {
  const abc = message;
  console.log(abc);
}

showMessage("Test");

// Функциональное выражение function expression

let sayHello = function () {
  console.log("Hello");
};

sayHello();

function summ(a, b) {
  return a + b;
}

let res = summ(1, 2);
console.log(summ(summ(1, 2), summ(5, 5.5)));


function doSomeThing(func) {
    console.log(func(1,2));
}

doSomeThing(summ);


//самовызывающаяся функция IIFE
{
  (function (a, b) {
    console.log(a + b);
  })(2, 3);
}


// ------------------ Стрелочные функции не имеют своего контекста
// ссылается на конекст, в котором она была объявлена

const arrSayHi = (name) => {
  console.log(`Hellow ${name}`);
}

arrSayHi("Mark");

const arrSayHi2 = (name) => console.log(`Hellow ${name}`);

arrSayHi2("Mark");


