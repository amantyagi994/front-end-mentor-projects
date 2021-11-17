const errmsg = document.getElementById("errmsg");
const err = document.getElementById("error");

function checkEmail() {
  var email = document.getElementById("email");
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    err.classList.toggle("active");
    errmsg.classList.toggle("active");
    email.focus;
    return false;
  }
}