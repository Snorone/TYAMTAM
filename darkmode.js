function darkMode() {
	let darkModeBody = document.body;
	darkModeBody.classList.toggle("darkmode");
}
function changeSvgs() {
	const contactUs = document.querySelector(".callUs");
	const chatNow = document.querySelector(".chatNow");
	const getStarted = document.querySelector(".getStarted");
	contactUs.src = "./assets/call-dark.svg";
	chatNow.src = "./assets/chatt-dark.svg";
	getStarted.src = "./assets/mail-dark.svg";
}

const darkModeBtn = document.querySelector("#switch");
darkModeBtn.addEventListener("click", (event) => {
	darkMode();
	changeSvgs();
	event.preventDefault();
});
