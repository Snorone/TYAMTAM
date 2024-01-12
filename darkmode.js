let darkModeBody = document.body;
// function changeSvgs() {
// 	const contactUs = document.querySelector(".callUs");
// 	const chatNow = document.querySelector(".chatNow");
// 	const getStarted = document.querySelector(".getStarted");
// 	contactUs.src = "./assets/call-dark.svg";
// 	chatNow.src = "./assets/chatt-dark.svg";
// 	getStarted.src = "./assets/mail-dark.svg";
// }
const darkModeBtn = document.querySelector("#switch");

// 1
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkTheme.matches) {
	darkModeBody.classList.add("darkmode");
	darkModeBtn.setAttribute("checked", "true");
} else {
	darkModeBody.classList.remove("darkmode");
}
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);
let theme = "light";

if (currentTheme == "dark") {
	darkModeBody.classList.add("darkmode");
	console.log(currentTheme);
}
if (darkModeBody.classList.contains("darkmode")) {
	theme = "dark";
}

darkModeBtn.addEventListener("click", function () {
	darkModeBody.classList.toggle("darkmode");

	if (darkModeBody.classList.contains("darkmode")) {
		theme = "dark";
	}
	localStorage.setItem("theme", theme);
	// changeSvgs();
	console.log(theme);
	// preventDefault();
});

// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// const currentTheme = localStorage.getItem("theme");

// if (currentTheme == "dark") {
// 	darkModeBody.classList.toggle("darkmode");
// } else if (currentTheme == "light") {
// 	darkModeBody.classList.toggle("");
// }

// darkModeBtn.addEventListener("click", function () {
// 	if (prefersDarkScheme.matches) {
// 		darkModeBody.classList.toggle("light-mode");

// 		let theme = darkModeBody.classList.contains("light-mode");
// 	} else {
// 		darkModeBody.classList.toggle("darkmode");
// 		let theme = darkModeBody.classList.contains("darkmode") ? "dark" : "light";
// 	}

// 	localStorage.setItem("theme", theme);
// });
