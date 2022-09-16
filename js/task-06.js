const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.dataset.length;
inputEl.addEventListener("blur", () => {
  if (
    inputEl.value.length < inputLength ||
    inputEl.value.length > inputLength
  ) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
    return;
  }

  inputEl.classList.remove("invalid");
  inputEl.classList.add("valid");
  return;
});
