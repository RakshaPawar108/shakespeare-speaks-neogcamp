// DOM Objects
let textInput = document.querySelector("#text-input");
let btnTranslate = document.querySelector("#btn-translate");
let outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

// Return the server URL with input text.
function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

// Error Handler in case an error occurs
function errorHandler(error) {
  console.log("Error Occurred: " + error);
}

// Event Handler
function clickHandler() {
  let inputText = textInput.value;

  // Calling Shakespeare translate api using fetch
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => (outputDiv.innerHTML = json.contents.translated))
    .catch(errorHandler);
}

// Event Listeners
btnTranslate.addEventListener("click", clickHandler);
