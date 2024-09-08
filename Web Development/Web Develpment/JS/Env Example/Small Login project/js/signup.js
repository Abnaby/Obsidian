// Import main file
import { User, print, validateUserName, retERROR, userArray } from "./main.js";

// Variables
const DOM_idx = {
  UserName: 0,
  Email_idx: 1,
  Password_idx: 2,
};
// Get Elements by Id
let SignUpForm = document.querySelector(".signup-page");
// Functions
function displayError(errTypeIdx, eleId) {
  let listPropNames = Object.keys(retERROR);
  SignUpForm[eleId].placeholder = listPropNames[errTypeIdx];
  SignUpForm[eleId].value = "";
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
  const username = SignUpForm[DOM_idx.UserName].value;
  error = validateUserName(username);
  if (error != retERROR.SUCCESS) {
    displayError(error, DOM_idx.UserName);
    return error;
  }
  // -------------- Create User
  let userData = new User(username, "asd", "Asd", "asd");

  // -------------- Append to Array
  userArray.push(userData);
  // -------------- Clear placeholder data
  for (let element in DOM_idx) {
    SignUpForm[DOM_idx[element]].value = SignUpForm[
      DOM_idx[element]
    ].value.slice(0, -1);
  }
  removeCharByChar(DOM_idx, SignUpForm); // Start the character removal process

  // -------------- DEBUG SECTION ------------------
  print("-------------- START DEBUG SECTION ------------------");
  print(userData);
  print(userArray);
  print("-------------- END   DEBUG SECTION ------------------");
});
