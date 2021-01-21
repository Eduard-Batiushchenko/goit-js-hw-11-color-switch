const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
let isActive = false;

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', changeColor);
stopBtnRef.addEventListener('click', stopChangeColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function stopChangeColor() {
  isActive = false;
  clearInterval(timerId);
}

function changeColor() {
  if (!isActive) {
    isActive = true;
    timerId = setInterval(setColor, 1000);
  }
}

function setColor() {
  const indexColor = randomIntegerFromInterval(0, colors.length - 1);
  const putColor = colors[indexColor];
  bodyRef.style.backgroundColor = putColor;
}
