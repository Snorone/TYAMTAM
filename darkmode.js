let darkModeBody = document.body;
// function darkMode() {
// 	darkModeBody.classList.toggle("darkmode");
// }
function changeSvgs() {
	const contactUs = document.querySelector(".callUs");
	const chatNow = document.querySelector(".chatNow");
	const getStarted = document.querySelector(".getStarted");
	contactUs.src = "./assets/call-dark.svg";
	chatNow.src = "./assets/chatt-dark.svg";
	getStarted.src = "./assets/mail-dark.svg";
}
const darkModeBtn = document.querySelector("#switch");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
	document.body.classList.add("darkmode");
}

darkModeBtn.addEventListener("click", (event) => {
	// darkMode();
	darkModeBody.classList.toggle("darkmode");

	changeSvgs();
	let theme = "light";
	if (document.body.classList.contains("darkmode")) {
		theme = "dark";
	}
	localStorage.setItem("theme", theme);
	event.preventDefault();
});

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
	darkModeBody.classList.add("darkmode");
} else {
	darkModeBody.classList.remove("darkmode");
}
