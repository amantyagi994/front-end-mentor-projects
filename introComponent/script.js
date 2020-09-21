const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const lastname = document.getElementById('lastname');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if (firstnameValue === '') {
		setErrorFor(firstname);
	}
	else {
		setSuccessFor(firstname);
	}

	if (emailValue === '') {
		setErrorFor(email);
	} else if (!isEmail(emailValue)) {
		notValidEmail(email);
	}
	else {
		setSuccessFor(email);
	}

	if (passwordValue === '') {
		setErrorFor(password);
	} else {
		setSuccessFor(password);
	}

	if (lastnameValue === '') {
		setErrorFor(lastname);
	}
	else {
		setSuccessFor(lastname);
	}
}

function setErrorFor(input) {
	const formControlError = input.parentElement;
	formControlError.className = 'inputdiv error';
}

function setSuccessFor(input) {
	const formControlSuccess = input.parentElement;
	formControlSuccess.className = 'inputdiv';
}

function notValidEmail(valid) {
	const formControlInValid = valid.parentElement;
	formControlInValid.className = 'inputdiv .notemail';
}

function isEmail(mail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
}