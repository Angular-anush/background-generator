var css = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); //dont use .value; code here
//make sure that you are selecting the body
// console.log(body);
// console.log(css);
// console.log(color1);
// console.log(color2);
// we wanna listen to an event where we notice users actions i.e input
//for inputs there is an event called INPUT
//so when any time input value changes we can detect that
//we are grabbing the color value of color1 and color2 and we have tochange the color of the html document
//the background is in body tag so we have to grab body background value line no 4

//do not repeate yourself
function setGradient() {
  //   body.setAttribute(body,color1);
  //this entire syntax we must remember
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    //we have to display css gradient on the screen
    css.textContent=body.style.background + ";";
}
//separation of concern matters

color1.addEventListener("input", setGradient);
//this gets triggered automatically so dont need to call it.
// console.log(color1.value);
color2.addEventListener("input", setGradient);
