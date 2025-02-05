h2 = document.querySelector("h2");

h2.classList.add("red-text");

headersH3 = document.querySelectorAll("h3");

headersH3.forEach((h3) => h3.classList.add("green-text"));

for (let item of headersH3) {
  item.classList.remove("green-text");
  item.classList.add("red-text");
}

// console.log(headersH3)

const firstH3Header = document.querySelector("h3");
console.log(firstH3Header);
firstH3Header.classList.remove("red-text");
firstH3Header.classList.add("red");
firstH3Header.classList.toggle("red");
console.log(firstH3Header.classList.contains("red"));
firstH3Header.classList.add("blue");
firstH3Header.classList.replace("blue", "green");
