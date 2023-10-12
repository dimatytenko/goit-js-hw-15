const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
