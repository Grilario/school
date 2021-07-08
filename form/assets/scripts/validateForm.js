const form = document.forms.register;
const inputs = form.querySelectorAll(".input");

function validInput(input) {
  const value = input.lastElementChild.value;
  if (!value) {
    input.classList.remove("success");
    input.classList.add("err");
    return false;
  }

  if (input.lastElementChild.type == "email") {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isEmail = regex.test(value);
    if (!isEmail) {
      input.classList.remove("success");
      input.classList.add("err");
      return false;
    }
  }

  input.classList.remove("err");
  input.classList.add("success");
  return true;
}

inputs.forEach((input) => {
  input.lastElementChild.addEventListener("input", (e) => {
    validInput(input);
  });
  input.lastElementChild.addEventListener("blur", (e) => {
    validInput(input);
  });
});

form.addEventListener("submit", (e) => {
  inputs.forEach((input) => {
    const isValid = validInput(input);
    if (!isValid) {
      e.preventDefault();
    }
  });
});
