let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.png") {
    myImage.setAttribute("src", "images/dragonite.png");
  } else {
    myImage.setAttribute("src", "images/firefox.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
  let myName = prompt("请输入你的名称：");
  if (!myName) {
    setUsername();
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = "你好，欢迎来到Pokemon center！";
}

if (!localStorage.getItem("name")) {
  setUsername();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "欢迎回来，" + storedName;
}

myButton.onclick = function () {
  setUsername();
};
