const timerId = setInterval(() => {
  console.log("Hello");
}, 1000);

console.log(timerId);

// clearInterval(timerId);

const timerId2 = setTimeout(() => {
  clearInterval(timerId);
}, 5000);

console.log(timerId2);
