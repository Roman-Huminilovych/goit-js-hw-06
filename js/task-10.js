const refs = {
  controlsDiv: document.querySelector("#controls"),
  inputNumber: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesDiv: document.querySelector("#boxes"),
};

let boxesListEl = [];
let inputValue = 0;
let startBoxWidth = 30;

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.inputNumber.addEventListener("blur", getInputValue);

function getInputValue() {
  inputValue = Number(refs.inputNumber.value);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  const arrayOfInputValues = new Array(inputValue);

  for (const element of arrayOfInputValues) {
    const boxEl = document.createElement("div");
    startBoxWidth += 10;
    boxEl.style.width = `${startBoxWidth}px`;
    boxEl.style.height = `${startBoxWidth}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesListEl.push(boxEl);
  }

  refs.boxesDiv.append(...boxesListEl);
}

function destroyBoxes() {
  refs.boxesDiv.innerHTML = "";
  refs.inputNumber.value = "0";
  boxesListEl.length = 0;
  startBoxWidth = 30;
}
