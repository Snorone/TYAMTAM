import { displayMovie, displayRandomTopRated } from "./modules/display.js";
// import { displayRandomMovie } from "./modules/display.js";
import { fetchInfo } from "./modules/fetch.js";
// import { randomFetch } from "./modules/fetch.js";
import { randomTopRatedFetch } from "./modules/fetch.js";

const randomPage = Math.floor(Math.random() * 20) + 1;
console.log(randomPage);
randomTopRatedFetch(randomPage).then(displayRandomTopRated);

const formEl = document.querySelector("form");
formEl.addEventListener("submit", (event) => {
	const userInput = document.querySelector("#userInput").value;
	event.preventDefault();
	fetchInfo(userInput).then(displayMovie);
	formEl.reset();
});

function darkMode() {
	const darkModeBody = document.body;
	const darkModeMain = document.body.main;
	darkModeBody.classList.toggle("dark-body");
	darkModeMain.classList.toggle("dark-main");
}
const darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", (event) => {
	darkMode();
	event.preventDefault();
});
