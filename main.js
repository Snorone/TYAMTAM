import { displayMovie } from "./modules/display.js";
import { fetchInfo } from "./modules/fetch.js";
import { displayRandomMovie } from "./modules/display.js";

const formEl = document.querySelector("form");
formEl.addEventListener("submit", (event) => {
  const userInput = document.querySelector("#userInput").value;
  event.preventDefault();

fetchInfo(userInput)
    .then(displayMovie)
    formEl.reset();

//   fetchInfo(userInput)
//     .then((responseObject) => {
//     console.log(responseObject);
//     displayMovie(responseObject);
//     formEl.reset();
//   });
});

// const randomBtn = document.querySelector("#randomBtn");
// randomBtn.addEventListener("click", (event) => {
//   event.preventDefault();

//   const randomPage = Math.floor(Math.random() * 10);

//   fetchInfo(event.target.id, randomPage).then((response) => {
//     // console.log(response, "response eller object");
//     displayRandomMovie(response);
//   });

//   console.log(randomNumber);
//   console.log(randomPage);
// });
