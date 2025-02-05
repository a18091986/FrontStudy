const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
  console.log(event.target);
});

// list.addEventListener('click', function() {
//   console.log(this);
// })
