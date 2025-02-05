let counter = 0;
let timerId;

const timerDiv = document.querySelector("#counter");
const btnStart = document.querySelector("#start");
const btnPause = document.querySelector("#pause");
const btnReset = document.querySelector("#reset");

// const timerId = setInterval(() => {
//   counter++;
//   timerDiv.textContent = counter;
// }, 1000);

btnStart.onclick = () => {
  timerId = setInterval(function () {
    counter++;
    timerDiv.textContent = counter;
  }, 1000);
};

btnPause.onclick = () => {
  clearInterval(timerId);
};

btnReset.onclick = () => {
  counter = 0;
  timerDiv.textContent = counter;
};

btnReset.addEventListener("click", () => {
  counter = 0;
  clearInterval(timerId);
  timerDiv.textContent = counter;
});
