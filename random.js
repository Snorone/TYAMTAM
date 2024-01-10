import { displayRandomMovie } from "./modules/display.js";
import { randomFetch } from "./modules/fetch.js";

const randomBtn = document.querySelector("#randomBtn");
randomBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const randomPage = Math.floor(Math.random() * 10)+1;
  console.log(randomPage);
  randomFetch(randomPage)
    .then(displayRandomMovie)
//   fetchInfo(event.target.id, randomPage).then((response) => {
//     // console.log(response, "response eller object");
//     displayRandomMovie(response);
//   });

//   console.log(randomNumber);
  console.log(randomPage);
});