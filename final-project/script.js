console.log("my JavaScript file is connected!");


let changeBackground = document.getElementById("change-background");
// Change the background to white
let whiteBackground = document.getElementById("white-background");

whiteBackground.addEventListener("click", makeBackgroundWhite);

function makeBackgroundWhite() {
  console.log("user wants to make background white");
  changeBackground.style.background = "GhostWhite";
}




// Change the background to back to its original background color
let originalBackground = document.getElementById("original-background");

originalBackground.addEventListener("click", makeBackgroundOriginal);

function makeBackgroundOriginal() {
  console.log("user wants to make background back");
  changeBackground.style.background = "FloralWhite";
}


// Also change the font color when click
let purpleFont = document.getElementById("original-background");

purpleFont.addEventListener("click", changeFontColor);

function changeFontColor() {
  console.log("user wants to change the font purple");
  changeBackground.style.color = "purple";
}
