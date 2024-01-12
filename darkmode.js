let darkModeBody = document.body;
const getSvgs = document.querySelector(".svgs");

function dmSvgFunc() {
  const contactUs = document.querySelector(".callUs");
  const chatNow = document.querySelector(".chatNow");
  const getStarted = document.querySelector(".getStarted");
  contactUs.src = "./assets/call-dark.svg";
  chatNow.src = "./assets/chatt-dark.svg";
  getStarted.src = "./assets/mail-dark.svg";
}
function lmSvgFunc() {
  const contactUs = document.querySelector(".callUs");
  const chatNow = document.querySelector(".chatNow");
  const getStarted = document.querySelector(".getStarted");
  contactUs.src = "./assets/Group 23.svg";
  chatNow.src = "./assets/Group 24.svg";
  getStarted.src = "./assets/Group 20.svg";
}
const darkModeBtn = document.querySelector("#switch");

darkModeBtn.addEventListener('click', darkLight)

function darkLight (event){
  localStorage.clear();
  if(event.target.checked){
    darkModeBody.classList.add("darkmode")
  }
  else{
    darkModeBody.classList.remove("darkmode")

  }
  localStorage.setItem("theme", event.target.checked? 'dark' : 'light');
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  darkModeBody.classList.add("darkmode");
  darkModeBtn.setAttribute("checked", "true");
  if (darkModeBody.contains(getSvgs)) {
    dmSvgFunc();
  }
} else {
  darkModeBody.classList.remove("darkmode");
  darkModeBtn.removeAttribute("checked");

  theme = "light";
  if (darkModeBody.contains(getSvgs)) {
    lmSvgFunc();
  }
}
/*const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
let theme = "light";
if (prefersDarkTheme.matches) {
  darkModeBody.classList.add("darkmode");
  darkModeBtn.setAttribute("checked", "true");
  theme = "dark";
  if (darkModeBody.contains(getSvgs)) {
    dmSvgFunc();
  }
} else {
  darkModeBody.classList.remove("darkmode");
  darkModeBtn.removeAttribute("checked");
  theme = "light";
  if (darkModeBody.contains(getSvgs)) {
    lmSvgFunc();
  }
}
if (darkModeBody.classList.contains("darkmode")) {
  theme = "dark";
}
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  darkModeBody.classList.add("darkmode");
  darkModeBtn.setAttribute("checked", "true");
  if (darkModeBody.contains(getSvgs)) {
    dmSvgFunc();
  }
} else {
  darkModeBody.classList.remove("darkmode");
  darkModeBtn.removeAttribute("checked");

  theme = "light";
  if (darkModeBody.contains(getSvgs)) {
    lmSvgFunc();
  }
}
if (darkModeBody.classList.contains("darkmode")) {
  theme = "dark";
}

darkModeBtn.addEventListener("click", function () {
  localStorage.clear();
  if (darkModeBody.classList.contains("darkmode")) {
    darkModeBody.classList.remove("darkmode");
    theme = "light";
    if (darkModeBody.contains(getSvgs)) {
      lmSvgFunc();
    }
  } else {
    localStorage.clear();
    darkModeBody.classList.toggle("darkmode");
    theme = "dark";
    if (darkModeBody.contains(getSvgs)) {
      dmSvgFunc();
    }
  }
  localStorage.setItem("theme", theme);
});*/

// !
