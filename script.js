const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "Không được để trống");
  } else {
    showSuccess(username, "ok chhua");
  }
  if (email.value === "") {
    showError(email, "Không được để trống");
  } else {
    if (!isValidEmail(email.value)) {
      showError(email, "Email không đúng định dạng");
    } else {
      showSuccess(email, "ok chhua");
    }
  }
  if (password.value === "") {
    showError(password, "Không được để trống");
  } else {
    showSuccess(password, "ok chhua");
  }
  if (password2.value === "") {
    showError(password2, "Không được để trống");
  } else {
    if (password2.value !== password.value) {
      showError(password2, "không khớp với mật khẩu đã nhập ");
    } else {
      showSuccess(password2, "ok chhua");
    }
  }
});
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
  console.log(formControl);
};
const showSuccess = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";

  console.log(formControl);
};
