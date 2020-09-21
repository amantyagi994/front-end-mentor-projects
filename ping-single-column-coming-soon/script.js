const btnNotify = document.getElementById('notify');
const email = document.getElementById('email');

btnNotify.addEventListener("click", (e) => {
  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  if ((emailValue === '') || (!isEmail(emailValue))) {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input) {
  const formControlError = input.parentElement;
  formControlError.className = 'searchContainer erractive';
}

function setSuccessFor(inputsuccess) {
  const formControlError = inputsuccess.parentElement;
  formControlError.className = 'searchContainer success';
}

function isEmail(mail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
}