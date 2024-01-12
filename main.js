import { displayMovie, displayRandomTopRated } from "./modules/display.js";
import { fetchInfo } from "./modules/fetch.js";
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
	let footer = document.querySelector("footer").style.position = "relative";
});
