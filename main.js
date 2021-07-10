canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent="empty";
var lastx, lasty;
color="black";
var width=1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
console.log(width);
   mouseEvent="mouseDown";
   console.log(mouseEvent);

}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
   mouseEvent="mouseUp";
   console.log(mouseEvent);

}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
   mouseEvent="mouseleave";
   console.log(mouseEvent);

}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
  currentx=e.clientX-canvas.offsetLeft;
  currenty=e.clientY-canvas.offsetTop;

  if(mouseEvent=="mouseDown"){

    console.log("Current position of X and Y are");
    console.log("x = " + currentx + "y = " + currenty);

      ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
console.log("Last position of X and Y are");
console.log("x = " + lastx + "y = " + lasty);
ctx.arc(currentx, currenty, radius, 0, 2 * Math.PI);
ctx.stroke();
  }

  lastx=currentx;
  lasty=currenty;
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

