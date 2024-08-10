let header = document.createElement("div");
let footer = document.createElement("div");
let content = document.createElement("div");

function createCard(Number, Name) {
  // Create Card Elements
  let parentDiv = document.createElement("div");
  let paragraph = document.createElement("p");
  let childSpan = document.createElement("span");

  // Create Text Nodes
  let NumberTxtNode = document.createTextNode(Number);
  let NameTxtNode = document.createTextNode(Name);

  // Append paragraph and childSpan
  paragraph.appendChild(NumberTxtNode);
  childSpan.appendChild(NameTxtNode);
  paragraph.appendChild(childSpan);

  parentDiv.appendChild(paragraph);

  content.append(parentDiv);
  // Set Class Name
  parentDiv.className = `Card`;

  // Card CSS
  // Main Div CSS
  parentDiv.style.backgroundColor = "#FFFFFF";
  parentDiv.style.display = "flex";
  // parentDiv.style.height = "calc(100%/9)";
  parentDiv.style.justifyContent = "center";
  parentDiv.style.alignItems = "center";
  parentDiv.style.margin = "10px";
  parentDiv.style.width = "32%";

  // document CSS
  paragraph.style.display = "flex";
  paragraph.style.textAlign = "center";
  paragraph.style.flexDirection = "column";
  paragraph.style.fontSize = "30px";

  // childSpan CSS
  childSpan.style.margin = "5px 0px";
  childSpan.style.fontSize = "20px";
  childSpan.style.color = "rgb(160, 160, 160)";

  // Append
  document.body.append(content);
}

function createFooter(string) {
  let parDiv = document.createElement("div");
  let paragraph = document.createElement("p");
  // Nodes
  let txt = document.createTextNode(string);
  // Link
  paragraph.append(txt);
  parDiv.append(paragraph);
  footer.append(parDiv);
  // CSS
  parDiv.style.backgroundColor = "#156843";
  parDiv.style.width = "100%";
  parDiv.style.textAlign = "center";
  parDiv.style.color = "#FFFFFF";
  parDiv.style.height = "100%";
  // Append
  document.body.append(footer);
}
function createHeader(logoName) {
  // Divs
  let mainDev = document.createElement("div");
  let rhs = document.createElement("div");
  let lhs = document.createElement("div");
  let home = document.createElement("a");
  let about = document.createElement("a");
  let service = document.createElement("a");
  let contact = document.createElement("a");

  // Nodes
  let logo_txt = document.createTextNode(logoName);
  let home_txt = document.createTextNode("Home");
  let about_txt = document.createTextNode("About");
  let service_txt = document.createTextNode("Service");
  let contact_txt = document.createTextNode("Contact");
  // Link
  lhs.append(logo_txt);
  home.append(home_txt);
  about.append(about_txt);
  service.append(service_txt);
  contact.append(contact_txt);

  rhs.append(home);
  rhs.append(about);
  rhs.append(service);
  rhs.append(contact);

  mainDev.append(lhs);
  mainDev.append(rhs);
  header.append(mainDev);

  // Set Class Name
  mainDev.className = "Header-mainDev";
  rhs.className = "Header-rhs";
  lhs.className = "Header-lhs";
  home.className = "rhsLink home";
  about.className = "rhsLink about";
  service.className = "rhsLink service";
  contact.className = "rhsLink contact";
  // CSS
  mainDev.style.width = "100%";
  mainDev.style.height = "100%";
  mainDev.style.display = "flex";
  mainDev.style.justifyContent = "space-between";

  lhs.style.fontSize = "30px";
  lhs.style.margin = "10px 50px";
  lhs.style.color = "#156843";
  lhs.style.fontWeight = "bold";

  rhs.style.display = "flex";
  rhs.style.justifyContent = "space-between";
  rhs.style.alignItems = "center";
  rhs.style.margin = "0 30px 0 0"
  let rhsLinks = rhs.querySelectorAll(".rhsLink");
  // Same Style for all links
  for (let i = 0; i < rhsLinks.length; i++) {
    rhsLinks[i].style.margin = "10px";
    rhsLinks[i].setAttribute("href", "#");
    rhsLinks[i].style.textDecoration = "none";
    rhsLinks[i].style.color= "rgb(160, 160, 160)";
  }
  // Append
  document.body.append(header);
}
/***************** MAIN LOGIC  ******************/
// Set Body settings
{
  document.body.style.backgroundColor = "#ECECEC";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.height = "100vh";
  // document.body.style.overflow = "hidden"

  // Set Class Names
  header.className = "header";
  content.className = "content";
  footer.className = "footer";

  // Header CSS
  {
    header.style.width = "100%";
    header.style.backgroundColor = "#FFFFFF";
  }
  // Set content CSS
  {
    content.style.display = "flex";
    content.style.flexDirection = "row";
    content.style.justifyContent = "center";
    content.style.flexWrap = "wrap";
    content.style.width = "100%";
  }
  // Footer CSS
  {
    footer.style.display = "flex";
    footer.style.flexDirection = "row";
    footer.style.justifyContent = "center";
    footer.style.flexWrap = "wrap";
    footer.style.width = "100%";
  }
  // Calls
  // Headers
  createHeader("Elzero");
  // Make Cards
  for (let i = 0; i < 15; i++) {
    createCard(i + 1, "Product");
  }

  // Footer
  createFooter("Copyright 2021");
}
