// Массивы
// Коллекции

const arr = ['Audi', 'BMW', 'Mercedes', 'Volvo'];

console.log(arr[0]);
console.log(arr[1]);

console.log(arr.length);
console.log(arr.at(-1));

// Методы массивов

// push - добавляет элемент в конец массива
arr.push('Toyota');
console.log(arr);

// pop - удаляет последний элемент массива
arr.pop();
console.log(arr);

// shift - удаляет первый элемент массива
arr.shift();
console.log(arr);

// unshift - добавляет элемент в начало массива
arr.unshift('Toyota');
console.log(arr);

// splice - удаляет элементы массива с такого то индекса такое то количество
arr.splice(1, 2);
console.log(arr);

// slice - возвращает новый массив, содержащий элементы, которые были удалены из исходного массива

