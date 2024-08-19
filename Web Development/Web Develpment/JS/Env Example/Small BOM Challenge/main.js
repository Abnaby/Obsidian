let HTML_container_div = document.querySelector(".container");
let submitBtn = document.querySelector(".add");
let inputString = document.querySelector(".input");
let errorMsg = document.querySelector(".error-msg");
// ##################### Variables ########################
let CardIdIndex = 0;
let CardsArray = [];
// ##################### FUNCTIONS ########################
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

  // Set Card Id
  ItemDiv.id = `card-${CardIdIndex}`;

  // Finally Append on container view
  HTML_container_div.append(ItemDiv);

  // CSS Style
  input.checked = isChecked;
  if (isChecked) {
    // Decorate Text
    paragraph.style.textDecoration = "line-through";
    paragraph.style.textDecorationThickness = "2px";
    paragraph.style.textDecorationColor = "red";
  }
  console.log(input);

  // Trigger the transition by adding the 'show' class
  setTimeout(() => {
    ItemDiv.classList.add("show");
  }, 2); // Slight delay to ensure the card is added to the DOM first
}

function checkInputString(str) {
  if (str != "") return 1;
  return 0;
}
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
  }
  // Clear String
  inputString.value = "";
}
// ##################### MAIN SCOPE ########################
// Init
{
  // Check Storage
  if (localStorage.getItem("Tasks")) {
    // Reparse array 
    console.log("Hello");
  }
  // When Submit Button Clicked
  submitBtn.addEventListener("click", handleNewInput);
  inputString.addEventListener("keydown", (keyButton) => {
    if (keyButton.key == "Enter") {
      handleNewInput();
    }
  });
}
