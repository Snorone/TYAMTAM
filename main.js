import { displayMovie } from "./modules/display.js";
import { fetchInfo } from "./modules/fetch.js";

const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
    const userInput = document.querySelector('#userInput').value;
    event.preventDefault();
    console.log(userInput);

    fetchInfo(userInput)
        .then(displayMovie)
})



// fetchInfo()
//     .then(displayMovie)

