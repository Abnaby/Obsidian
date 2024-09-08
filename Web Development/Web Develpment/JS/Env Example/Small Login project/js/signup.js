// Import main file
import {
  User,
  print,
  validateUserName,
  validateEmail,
  validatePassword,
  retERROR,
  userArray,
  updateDatabase,
  updateUsersArrayFromDatabase,
} from "./main.js";

// Variables
const DOM_idx = {
  UserName: 0,
  Email_idx: 1,
  Password_idx: 2,
};
// Get Elements by Id
let SignUpForm = document.querySelector(".signup-page");
let passwd_Assets = document.querySelectorAll(".passwd-assets");
let passwd_p = document.querySelectorAll(".passwd-assets")[0].children[0]; // children[0] --> for span
let upperChar_p = document.querySelectorAll(".passwd-assets")[1].children[0];
let lowerChar_p = document.querySelectorAll(".passwd-assets")[2].children[0];
let specialChar_p = document.querySelectorAll(".passwd-assets")[3].children[0];
let digits_p = document.querySelectorAll(".passwd-assets")[4].children[0];
// Functions
function displayError(errTypeIdx, eleId) {
  let listPropNames = Object.keys(retERROR);
  const OriginalValue = SignUpForm[eleId].value;
  SignUpForm[eleId].value = listPropNames[errTypeIdx];
  setTimeout(() => {
    SignUpForm[eleId].value = OriginalValue;
  }, 1000);
}

function removeCharByChar(DOM_idx, SignUpForm) {
  let allEmpty = true;

  // Loop through each field and remove only one character from the value
  for (let element in DOM_idx) {
    let field = SignUpForm[DOM_idx[element]];

    // If the field has any characters, remove the last one
    if (field.value.length > 0) {
      field.value = field.value.slice(0, -1);
      allEmpty = false; // There's still work to do
    }
  }

  // If any of the fields still have characters, call again after 60ms
  if (!allEmpty) {
    setTimeout(() => removeCharByChar(DOM_idx, SignUpForm), 60);
  }
}

function changePasswdStat_p(str_p, state) {
  if (state) {
    str_p.innerHTML = "✓";
    str_p.style.color = "green";
  } else {
    str_p.innerHTML = "X";
    str_p.style.color = "red";
  }
}
// Main Scope

// 1 - Remove any placeholder data
for (let element in DOM_idx) {
  SignUpForm[DOM_idx[element]].value = "";
}
// 2- Check Inputs
addEventListener("submit", (e) => {
  e.preventDefault();
  // Variables
  let error = retERROR.SUCCESS;
  // Extract Info
  // 1 - Check Username
  const username = SignUpForm[DOM_idx.UserName].value;
  error = validateUserName(username);
  if (error != retERROR.SUCCESS) {
    displayError(error, DOM_idx.UserName);
    return error;
  }
  // 2- Validate Email
  const email = SignUpForm[DOM_idx.Email_idx].value;
  error = validateEmail(email);
  if (error != retERROR.SUCCESS) {
    displayError(error, DOM_idx.Email_idx);
    return error;
  }
  // 3- Validate Password
  if (retERROR.ERR_PASSWORD["Is valid"] === 0) {
    // Not Valid Password
    return retERROR.INVALID_FORMAT;
  }
  // -------------- Create User
  let userData = new User(
    username,
    email,
    retERROR.ERR_PASSWORD["Password"],
    "None"
  );

  // -------------- Append to Array
  userArray.push(userData);

  // -------------- Update database
  updateDatabase(userArray);

  // -------------- Value
  removeCharByChar(DOM_idx, SignUpForm);

  // -------------- Reset view
  passwd_Assets.forEach((element, index) => {
    element.classList.remove("visible");
  });

  // -------------- Reset Values
  retERROR.ERR_PASSWORD["Upper char"] = 0;
  retERROR.ERR_PASSWORD["Lower char"] = 0;
  retERROR.ERR_PASSWORD["Special char"] = 0;
  retERROR.ERR_PASSWORD["Digit char"] = 0;
  retERROR.ERR_PASSWORD["Password char"] = 0;
  retERROR.ERR_PASSWORD["Password"] = "";
  retERROR.ERR_PASSWORD["Is valid"] = 0;
});

// Validate password while typing
SignUpForm[DOM_idx.Password_idx].addEventListener("input", (e) => {
  let passwd = e.srcElement.value;
  let error = validatePassword(passwd);
  if (error != retERROR.SUCCESS) {
    retERROR.ERR_PASSWORD["Is valid"] = 0;
  }
  changePasswdStat_p(lowerChar_p, retERROR.ERR_PASSWORD["Lower char"]);
  changePasswdStat_p(upperChar_p, retERROR.ERR_PASSWORD["Upper char"]);
  changePasswdStat_p(specialChar_p, retERROR.ERR_PASSWORD["Special char"]);
  changePasswdStat_p(digits_p, retERROR.ERR_PASSWORD["Digit char"]);
  changePasswdStat_p(
    passwd_p,
    retERROR.ERR_PASSWORD["Password Length"] > 8 ? 1 : 0
  );
  // Add Visable Class
  passwd_Assets.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("visible");
    }, index * 10);
  });
});
// Show options while focus on password field
SignUpForm[DOM_idx.Password_idx].addEventListener("focus", (e) => {
  let txt = e.srcElement.value;
  if (txt.length === 0) {
    // Reset all
    changePasswdStat_p(lowerChar_p, 0);
    changePasswdStat_p(upperChar_p, 0);
    changePasswdStat_p(specialChar_p, 0);
    changePasswdStat_p(digits_p, 0);
    changePasswdStat_p(passwd_p, 0);
  }
  // Add Visable Class
  passwd_Assets.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("visible");
    }, index * 10);
  });
});

SignUpForm[DOM_idx.Password_idx].addEventListener("blur", (e) => {
  let txt = e.srcElement.value;
  // remove visable class when no input
  if (txt === "") {
    passwd_Assets.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("visible");
      }, index * 20);
    });
  }
});
