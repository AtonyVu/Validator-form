const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const checkRequired = (inputArray) => {
  inputArray.forEach((item) => {
    if (item.value === "") {
      showError(
        item,
        ` ${item.id.charAt(0).toUpperCase()}${item.id.slice(
          1
        )} Không được để trống`
      );
    }
  });
};
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
const checkLength = (input, min, max) => {
  if (input.value.length < min || input.value.length > max) {
    showError(input, `Phải có độ dài từ ${min}  đến ${max}`);
  } else {
    showSuccess(input, "ok roi do ");
  }
};
const checkeEmailer = (input) => {
  if (!isValidEmail(input.value)) {
    showError(input, "Email không đúng định dạng");
  } else {
    showSuccess(input);
  }
};
const checkConfirmPassword = (input, input2) => {
  if (input.value !== input2.value) {
    showError(input2, "password không khớp");
  } else {
    showSuccess(input2);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password2, password]);
  checkLength(password, 3, 10);
  checkLength(username, 3, 15);
  checkeEmailer(email);
  checkConfirmPassword(password, password2);
});
