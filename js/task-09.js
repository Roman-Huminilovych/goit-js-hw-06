const bodyEl = document.querySelector("body");
const colorSpanEl = document.querySelector(".color");
const changeBtnEl = document.querySelector(".change-color");

changeBtnEl.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  let colorNow = getRandomHexColor();
  bodyEl.style.backgroundColor = `${colorNow}`;
  // console.log(colorNow);
  colorSpanEl.textContent = colorNow;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
