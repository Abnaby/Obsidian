let HTML_container_div = document.querySelector(".container");
let submitBtn = document.querySelector(".add");
let inputString = document.querySelector(".input");
let errorMsg = document.querySelector(".error-msg");
// ##################### Variables ########################
let CardIdIndex = 0;
let CardsArray = [];
// ##################### FUNCTIONS ########################

function UpdateHtmlItems() {
  HTML_container_div = document.querySelector(".container");
  submitBtn = document.querySelector(".add");
  inputString = document.querySelector(".input");
  errorMsg = document.querySelector(".error-msg");
  checkboxs = document.querySelectorAll(".ItemCheckbox");
}
/**
 *
 * @description this function triggred when delete all items button is pressed
 */
function handleDeleteAllPressed() {
  let allItems = document.querySelectorAll(".Item");
  if (allItems.length > 0) {
    allItems.forEach((element, index) => {
      // Trigger the transition by adding the 'hide' class
      element.classList.remove("show");
      element.classList.add("hide");
      setTimeout(() => {
        document.getElementById(element.id).remove();
      }, 600); // Remove item in HTML code
    });
    // Variables reinit
    CardIdIndex = 0;
    CardsArray = [];
    localStorage.clear();
  }
}
/**
 *
 * @param {checkbox} pressedCheckbox
 * @description this function triggred when checkbox state is changed
 */
function handleCheckboxChange(checkbox) {
  let itemParagraph = checkbox.nextElementSibling;
  let id = checkbox.parentElement.id.split("-")[1] - 1; // index

  if (checkbox.checked == true) {
    itemParagraph.style.textDecoration = "line-through";
    itemParagraph.style.textDecorationThickness = "2px";
    itemParagraph.style.textDecorationColor = "red";
  } else {
    itemParagraph.style.textDecoration = "none";
  }
  // Update Array
  CardsArray[id].checkbox = checkbox.checked;
  // Store New Data
  // Converte to JSON
  const JSON_obj = JSON.stringify(CardsArray);
  // Get Id
  localStorage.setItem("Tasks", JSON_obj);
}
/**
 *
 * @param {delteBtn} pressedButton
 * @description this function triggred when delete button is pressed
 */
function handleDeletePressed(delteBtn) {
  let parentElement = delteBtn.parentElement;
  let id = delteBtn.parentElement.id.split("-")[1] - 1; // index
  // Trigger the transition by adding the 'hide' class
  parentElement.classList.remove("show");
  parentElement.classList.add("hide");
  setTimeout(() => {
    parentElement.remove();
  }, 550); // Remove item in HTML code
  // Update Local Storage
  CardsArray[id] = -1;
  // Converte to JSON
  const JSON_obj = JSON.stringify(CardsArray);
  // Get Id
  localStorage.setItem("Tasks", JSON_obj);
}
/**
 *
 * @param txt           text in card
 * @param isChecked     is box checked (By default No)
 * @description       This function create the item that contains the user input data
 */
function CreateItemOnPage(txt, isChecked = false) {
  // Increase Global Varaible
  CardIdIndex++;

  // Create Div With Item Class
  let ItemDiv = document.createElement("div");
  let paragraph = document.createElement("p");
  let button = document.createElement("button");
  let input = document.createElement("input");

  // Create Text Node
  let ItemText = document.createTextNode(txt);
  let DeleteText = document.createTextNode("Delete");

  // Link Text Nodes to Parent
  button.append(DeleteText);
  ItemDiv.append(input, paragraph, button);
  paragraph.append(ItemText);

  // Set Class Name
  ItemDiv.className = "Item";
  input.type = "checkbox";
  input.className = "ItemCheckbox";
  button.className = "ItemDelete";
  paragraph.className = "ItemParagraph";

  // Set Handler
  input.setAttribute("onchange", "handleCheckboxChange(this);");
  button.setAttribute("onclick", "handleDeletePressed(this);");

  // Set Card Id
  ItemDiv.id = `card-${CardIdIndex}`;

  // Finally Append on container view
  document.querySelector(".tasks-container").prepend(ItemDiv);

  // CSS Style
  input.checked = isChecked;
  if (isChecked) {
    // Decorate Text
    paragraph.style.textDecoration = "line-through";
    paragraph.style.textDecorationThickness = "2px";
    paragraph.style.textDecorationColor = "red";
  }
  // Trigger the transition by adding the 'show' class
  setTimeout(() => {
    ItemDiv.classList.add("show");
  }, 2); // Slight delay to ensure the card is added to the DOM first
  // Update Items
  UpdateHtmlItems();
}

/**
 *
 * @param {*} str
 * @returns 0 if empty string, otherwise return 1
 */
function checkInputString(str) {
  if (str != "") return 1;
  return 0;
}

/**
 * @param void
 * @description store data in local storage
 */
function storeCardData() {
  let getDiv = document.getElementById(`card-${CardIdIndex}`);
  // Store Arr
  let currentCard = {
    id: `card-${CardIdIndex}`,
    data: getDiv.children[1].textContent,
    checkbox: getDiv.children[0].checked,
  };
  // Update array
  CardsArray.push(currentCard);

  // Converte to JSON
  const JSON_obj = JSON.stringify(CardsArray);
  // Get Id
  localStorage.setItem("Tasks", JSON_obj);
}
/**
 * @param void
 * @description This function called when `Add Task` Butten pressed, or user hit enter on text input
 */
function handleNewInput() {
  // Check Input String
  let str = inputString.value;
  if (checkInputString(str) === 1) {
    // Valid String
    errorMsg.style.display = "none";
    // Create Card with string
    CreateItemOnPage(str);
    // Save it in Local Storage
    storeCardData();
  } else {
    errorMsg.textContent = "Empty String !!";
    errorMsg.style.display = "block";
    errorMsg.style.color = "red";
    setTimeout(() => {
      errorMsg.style.display = "none";
    }, 3000);
  }
  // Clear String
  inputString.value = "";
}
// ##################### MAIN SCOPE ########################
// Init
{
  // Check Storage
  if (localStorage.getItem("Tasks")) {
    CardsArray = [];
    // Reparse array
    const JSON_obj = localStorage.getItem("Tasks");
    const list = JSON.parse(JSON_obj);
    // Filter
    CardsArray = list.filter((x) => {
      return x != -1;
    });
    // Looping
    CardsArray.forEach((element) => {
      CreateItemOnPage(element.data, element.checkbox);
    });
  }
  // When Submit Button Clicked
  submitBtn.addEventListener("click", handleNewInput);
  // When Press Enter
  inputString.addEventListener("keydown", (keyButton) => {
    // Scroll to the top of the tasks container
    document.querySelector(".tasks-container").scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Check Input
    if (keyButton.key == "Enter") {
      handleNewInput();
    }
  });
  inputString.addEventListener("focus", (keyButton) => {
    document.querySelector(".tasks-container").scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
