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
});
// ! start melker
// function darkMode() {
// 	let darkModeBody = document.body;
// 	darkModeBody.classList.toggle("darkmode");
// }
// function changeSvgs() {
// 	const contactUs = document.querySelector(".callUs");
// 	const chatNow = document.querySelector(".chatNow");
// 	const getStarted = document.querySelector(".getStarted");
// 	contactUs.src = "./assets/call-dark.svg";
// 	chatNow.src = "./assets/chatt-dark.svg";
// 	getStarted.src = "./assets/mail-dark.svg";
// }

// const darkModeBtn = document.querySelector("#switch");
// darkModeBtn.addEventListener("click", (event) => {
// 	darkMode();
// 	changeSvgs();
// 	event.preventDefault();
// });
