const inputEl = document.querySelector("#name-input");
const nameLabelEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameLabelEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    nameLabelEl.textContent = "Anonymous";
  }
}
