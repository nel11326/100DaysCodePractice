// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://academind.com";

// Add an element
// 1. create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";
// 2. get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p");
// 3. insert the new element into the parent element content
firstParagraph.append(newAnchorElement);
