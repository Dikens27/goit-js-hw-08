const container = document.querySelector('#controls');
const create = container.querySelector('[data-create]');
const destroy = container.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const number = container.querySelector('[type="number"]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  for (let i = 0; i <= amount - 1; i++) {
    const step = 10;
    const size = 30 + (step * i);
    const block = `<div style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;"></div>`;   
    boxes.innerHTML += block;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

create.addEventListener("click", () => {
  if (number.value >= 1 && number.value <= 100) {
    createBoxes(number.value);
    number.value = '';
  }
})

destroy.addEventListener("click", () => {
  destroyBoxes();
})
