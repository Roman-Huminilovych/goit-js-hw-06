const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElemetns = event.currentTarget.elements;
  const email = formElemetns.email.value;
  const password = formElemetns.password.value;

  if (email.length === 0 || password.length === 0) {
    return alert("Please fill in all the fields!");
  }

  const formObject = { email, password };
  console.log(formObject);
  form.reset();
}
