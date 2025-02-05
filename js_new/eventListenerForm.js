const input = document.querySelector("#input-text");
const textBlock = document.querySelector("#text-block");

input.addEventListener("input", () => {
  textBlock.textContent = input.value;
});
