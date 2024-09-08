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
});
/********************* Objects ***********************/
export class User {
  // Private Members
  #_name;
  #_email;
  #_passwd;
  #_rule;
  // Static
  static numberOfAllUsers = 0;
  // Proparties
  constructor(name, email, password, rule) {
    this.#_name = name;
    this.#_email = email;
    this.#_passwd = password;
    this.#_rule = rule;
    User.numberOfAllUsers++;
  }
  // Encapsulation Setters and Getters
  set updateName(newName) {
    this.#_name = newName;
  }
  set updateEmail(newName) {
    this.#_name = newName;
  }
  set updatePassword(newName) {
    this.#_name = newName;
  }
  set updateRule(newName) {
    // <!TODO> Change must be based on Rule
    this.#_name = newName;
  }
  get getName() {
    return this.#_name;
  }
  get getEmail() {
    return this.#_name;
  }
  get getPassword() {
    return this.#_name;
  }
  get getRule() {
    return this.#_name;
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
  // print(`match ${userName.match(userNameRegExp)}`)
  if (userNameRegExp.test(userName) === false) {
    return retERROR.INVALID_FORMAT;
  }
  return retERROR.SUCCESS;
}
