import { displayMovie } from "./modules/display.js";
import { fetchInfo } from "./modules/fetch.js";

const formEl = document.querySelector('form');
formEl.addEventListener('submit', event => {
    const userInput = document.querySelector('#userInput').value;
    event.preventDefault();

    fetchInfo(userInput)
        .then(displayMovie);

    formEl.reset();
})

const randomBtn = document.querySelector('#randomBtn');
randomBtn.addEventListener('click', ()=>{
    const randomNumber = Math.floor(Math.random()*1000);
    console.log(randomNumber);
})

