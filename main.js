const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Rakoon.jpeg") {
    myImage.setAttribute("src", "images/Doraemon.jpeg");
  } else {
    myImage.setAttribute("src", "images/Rakoon.jpeg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Doraemon Loves , ${myName}`;
      }
  }
myButton.onclick = () => {
    setUserName();
  };