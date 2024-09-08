export function print(msg) {
  console.log(msg);
}
function toDo(msg) {
  console.log(`<!TODO> ${msg}`);
}
/********************* VARIABLES *************/
export let userArray = [];
/********************* Enums and Meta Data *************/
export const retERROR = Object.freeze({
  SUCCESS: 0,
  INVALID_LENGTH: 1,
  INVALID_FORMAT: 2,
  EMPTY_FIELD: 3,
  ERR_PASSWORD: {
    "Upper char": 0,
    "Lower char": 0,
    "Special char": 0,
    "Digit char": 0,
    "Password Length": 0,
    Password: "",
    "Is valid": 0,
  },
});
/********************* Objects ***********************/
export class User {
  // Private Members
  #_name;
  #_email;
  #_passwd;
  #_rule;
  #_id;
  // Static
  static numberOfAllUsers = 0;
  // Proparties
  constructor(name, email, password, rule) {
    this.#_name = name;
    this.#_email = email;
    this.#_passwd = password;
    this.#_rule = rule;
    this.#_id = User.numberOfAllUsers;
    User.numberOfAllUsers++;
  }
  // Encapsulation Setters
  set updateName(newName) {
    this.#_name = newName;
  }
  set updateEmail(newEmail) {
    this.#_email = newEmail;
  }
  set updatePassword(newPassword) {
    this.#_passwd = newPassword;
  }
  set updateRule(newRule) {
    this.#_rule = newRule; // Change must be based on Rule
  }
  // Encapsulation Getters
  get getName() {
    return this.#_name;
  }
  get getEmail() {
    return this.#_email;
  }
  get getPassword() {
    return this.#_passwd;
  }
  get getRule() {
    return this.#_rule;
  }

  get getUserId() {
    return this.#_id;
  }
}

/********************* Function ***********************/
export function validateUserName(userName) {
  // Check if it empty
  if (userName === "") {
    return retERROR.EMPTY_FIELD;
  }
  // Check Length
  if (userName.length <= 3) {
    return retERROR.INVALID_LENGTH;
  }
  // Check
  /*
    ^ asserts the start of the string.
    [A-Za-z _-] allows any uppercase or lowercase letter, space, underscore, or hyphen.
    + ensures that at least one of the allowed characters is present.
    $ asserts the end of the string.
  */
  const userNameRegExp = /^[A-Za-z _-]+$/gi;
  if (userNameRegExp.test(userName) === false) {
    return retERROR.INVALID_FORMAT;
  }
  return retERROR.SUCCESS;
}

export function validateEmail(email) {
  // Check if it empty
  if (email === "") {
    return retERROR.EMPTY_FIELD;
  }
  // Check emailRegExp
  const emailRegExp = /[\w.-]+@([\w-]+\.)+[\w-]+/gi;
  if (emailRegExp.test(email) === false) {
    return retERROR.INVALID_FORMAT;
  }
  return retERROR.SUCCESS;
}

export function validatePassword(passwd) {
  // Check if it empty
  if (passwd === "") {
    return retERROR.EMPTY_FIELD;
  }
  // Check Length
  retERROR.ERR_PASSWORD["Password Length"] = passwd.length;
  // Check password
  if (/[a-z]/g.test(passwd)) {
    retERROR.ERR_PASSWORD["Lower char"] = 1;
  } else {
    retERROR.ERR_PASSWORD["Lower char"] = 0;
  }
  if (/[A-Z]/g.test(passwd)) {
    retERROR.ERR_PASSWORD["Upper char"] = 1;
  } else {
    retERROR.ERR_PASSWORD["Upper char"] = 0;
  }
  if (/\d/g.test(passwd)) {
    retERROR.ERR_PASSWORD["Digit char"] = 1;
  } else {
    retERROR.ERR_PASSWORD["Digit char"] = 0;
  }
  if (/\!|\@|\#|\$|\%|\^|\&|\*|\_/g.test(passwd)) {
    retERROR.ERR_PASSWORD["Special char"] = 1;
  } else {
    retERROR.ERR_PASSWORD["Special char"] = 0;
  }
  if (
    !(
      retERROR.ERR_PASSWORD["Lower char"] &&
      retERROR.ERR_PASSWORD["Upper char"] &&
      retERROR.ERR_PASSWORD["Digit char"] &&
      retERROR.ERR_PASSWORD["Special char"] &&
      retERROR.ERR_PASSWORD["Password Length"] > 8
    )
  ) {
    return retERROR.INVALID_FORMAT;
  } else {
    // valid
    retERROR.ERR_PASSWORD["Is valid"] = 1;
    retERROR.ERR_PASSWORD["Password"] = passwd;
  }
  return retERROR.SUCCESS;
}

export function updateDatabase(arrObj) {
  // Convert each User instance to a plain object before serializing to consider the Private Members
  const serializableArray = arrObj.map((user) => ({
    name: user.getName,
    email: user.getEmail,
    password: user.getPassword,
    rule: user.getRule,
    id: user.getUserId,
  }));

  // Convert to JSON
  const JSON_obj = JSON.stringify(serializableArray);
  // Store in localStorage
  localStorage.setItem("Users", JSON_obj);
}

export function updateUsersArrayFromDatabase(arrObj) {
  if (localStorage.getItem("Users")) {
    // Reparse array
    const JSON_obj = localStorage.getItem("Users");
    const parsedArray = JSON.parse(JSON_obj);

    // Convert plain objects back to User instances
    parsedArray.forEach((item) => {
      const user = new User(item.name, item.email, item.password, item.rule);
      arrObj.push(user);
    });
  }
}
// Get users from Database
updateUsersArrayFromDatabase(userArray);
