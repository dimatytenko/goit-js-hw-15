const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled!");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    event.currentTarget.reset();
  }
}
