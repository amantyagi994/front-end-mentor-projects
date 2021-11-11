const form = document.getElementById("form");
const inputData = document.getElementById("input-earlyAccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const inputDataValue = inputData.value.trim();

  if (inputDataValue === "" || !isEmail(inputDataValue)) {
    setErrorFor(inputData);
  } else {
    setSuccessFor(inputData);
  }
}

function setErrorFor(input) {
  const formControlError = input.parentElement;
  formControlError.className = "input-earlyAccess-container error";
}

function setSuccessFor(input) {
  const formControlSuccess = input.parentElement;
  formControlSuccess.className = "input-earlyAccess-container";
}

    function isEmail(mail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    mail
  );
}
