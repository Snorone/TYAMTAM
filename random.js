import { displayRandomMovie } from "./modules/display.js";
import { randomFetch } from "./modules/fetch.js";

const randomBtn = document.querySelector("#randomBtn");
randomBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const randomPage = Math.floor(Math.random() * 10) + 1;
  console.log(randomPage);
  randomFetch(randomPage).then(displayRandomMovie);
  let footerRand = document.querySelector("#footerRandom");
  footerRand.style.position = "relative";
  console.log(randomPage);
});
