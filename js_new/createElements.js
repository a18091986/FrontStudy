const container = document.querySelector("#elementsContainer");

const headerH1 = document.createElement("h1");
headerH1.textContent = "Hello World";

container.append(headerH1);

const mainHeader = document.querySelector("header");

const headerCopy = mainHeader.cloneNode((deep = true));

container.append(headerCopy);

const htmlExample = "<h2>Новый заголовок</h2>";
container.insertAdjacentHTML("beforeend", htmlExample);

const title = `Текст заголовка`;
const htmlExample2 = `<h2>${title}</h2>`;
container.insertAdjacentHTML("beforeend", htmlExample2);
