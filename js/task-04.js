let counterValue = 0;

const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
let valueEl = document.querySelector("#value");

btnDecrementEl.addEventListener("click", () => {
  valueEl.textContent = `${(counterValue -= 1)}`;
});

btnIncrementEl.addEventListener("click", () => {
  valueEl.textContent = `${(counterValue += 1)}`;
});
