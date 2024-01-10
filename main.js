import { displayMovie } from "./modules/display.js";
// import { displayRandomMovie } from "./modules/display.js";
import { fetchInfo } from "./modules/fetch.js";
// import { randomFetch } from "./modules/fetch.js";
import { randomTopRatedFetch } from "./modules/fetch.js";

const randomPage = Math.floor(Math.random() * 20)+1;
console.log(randomPage);



const formEl = document.querySelector("form");
formEl.addEventListener("submit", (event) => {
	const userInput = document.querySelector("#userInput").value;
	event.preventDefault();
	fetchInfo(userInput).then(displayMovie);
	formEl.reset();

	let footer = document.querySelector("footer").style.position = "relative";

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

//   const randomPage = Math.floor(Math.random() * 10)+1;
//   console.log(randomPage);
//   randomFetch(randomPage)
//     .then(displayRandomMovie)
// //   fetchInfo(event.target.id, randomPage).then((response) => {
// //     // console.log(response, "response eller object");
// //     displayRandomMovie(response);
// //   });

// //   console.log(randomNumber);
//   console.log(randomPage);
// });

function darkMode() {
	const darkMode = document.body;
	darkMode.classList.toggle("dark-mode");
}
const darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", (event) => {
	darkMode();
	event.preventDefault();
});
