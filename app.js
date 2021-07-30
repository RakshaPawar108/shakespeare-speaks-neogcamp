// DOM Objects
let textInput = document.querySelector("#text-input");
let btnTranslate = document.querySelector("#btn-translate");
let outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

// Event Handler
function clickHandler() {
  let inputText = textInput.value;
  console.log(inputText);
}

// Event Listeners
btnTranslate.addEventListener("click", clickHandler);
