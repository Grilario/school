const form = document.forms.modifyTitle;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = form.titulo.value;
  if (!inputValue) return;
  document.title = inputValue;
  inputValue = "";
});
