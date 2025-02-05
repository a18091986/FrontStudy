const img = document.querySelector("img");

console.log(img.getAttribute("src"));

img.src = "https://cdn.worldvectorlogo.com/logos/javascript-1.svg";
img.alt = "JS";
img.width = 300;
img.height = 300;

img.setAttribute(
  "src",
  "https://cdn.worldvectorlogo.com/logos/javascript-2.svg"
);

console.log(img.getAttributeNames());
img.removeAttribute("alt");
console.log(img.getAttributeNames());

const button = document.querySelector("#button");
button.value = "удалить картинку";
console.log(button.value);

button.addEventListener("click", () => {
  if (button.value === "удалить картинку") {
    img.remove();
    button.value = "добавить картинку";
  } else {
    img.src = "https://cdn.worldvectorlogo.com/logos/javascript-2.svg";
    button.value = "удалить картинку";
  }
  button.classList.toggle("red");
});

button.onclick = () => {
  button.classList.toggle("red-text");
};
