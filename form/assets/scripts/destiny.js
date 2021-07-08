(() => {
  const params = new URLSearchParams(location.search.substring(1));
  const name = params.get("name");
  const lastname = params.get("lastname");
  const email = params.get("email");
  if (!name || !lastname || !email) {
    location.href = "../../";
  }

  console.log(email);
  const span = document.querySelector("span");
  span.textContent = `${name} ${lastname}`;
})();
