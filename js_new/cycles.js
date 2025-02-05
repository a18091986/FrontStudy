for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

arr = ["Audi", "BMW", "Mercedes", "Volvo"];

for (let i=0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(function(item, index) {
  console.log(item, index);
});

for (let _ of arr) {
  console.log(_);
}

