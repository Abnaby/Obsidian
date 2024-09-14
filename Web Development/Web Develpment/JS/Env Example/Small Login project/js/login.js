// Import main file
import {
  validateEmail,
  validatePassword,
  retERROR,
  checkUser,
} from "./main.js";

// Get Elements by Id
let loginForm = document.querySelector(".login-page");
let state_p = document.querySelectorAll(".result");
let passwd_p = state_p[0].children[0]; // children[0] --> for span

// Variables
const DOM_idx = {
  Email_idx: 0,
  Password_idx: 1,
};
// Functions
function changePasswdStat_p(str_p, state) {
  console.log(str_p);
  if (state) {
    str_p.innerHTML = "✓";
    str_p.style.color = "green";
  } else {
    str_p.innerHTML = "X";
    str_p.style.color = "red";
  }
}

function displayError(state) {
  state_p[0].classList.add("visible");
  changePasswdStat_p(passwd_p, !state);
}

// Main Scope

// 1 - Remove any placeholder data
for (let element in DOM_idx) {
  loginForm[DOM_idx[element]].value = "";
}
state_p[0].classList.remove("visible");
// 2- Check Inputs
addEventListener("submit", (e) => {
  e.preventDefault();
  // Variables
  let error = retERROR.SUCCESS;
  // 1- Validate Email
  const email = loginForm[DOM_idx.Email_idx].value;
  error = validateEmail(email);
  if (error != retERROR.SUCCESS) {
    displayError(error);
    return;
  }
  // 2- Validate Password
  const passwd = loginForm[DOM_idx.Password_idx].value;
  error = validatePassword(passwd);
  if (error != retERROR.SUCCESS) {
    retERROR.ERR_PASSWORD["Is valid"] = 0;
    displayError(error);
    return;
  }

  // Check Existance
  let nUser = checkUser(email);

  console.log(nUser);
  if (nUser != -1 && nUser.getPassword === passwd) {
    console.log("------------- SUCCESS LOGIN -----------------");
    state_p[0].classList.remove("visible");
  } else {
    console.log("------------- INVALID LOGIN -----------------");
    displayError(error);
    return;
  }
  retERROR.ERR_PASSWORD["Is valid"] = 0;
});
