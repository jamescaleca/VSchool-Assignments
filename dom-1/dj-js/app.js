document.getElementById("square").addEventListener("mouseover", mouseOver);
document.getElementById("square").addEventListener("mouseout", mouseOut);
document.getElementById("square").addEventListener("mousedown", mouseDown);
document.getElementById("square").addEventListener("mouseup", mouseUp);
document.getElementById("square").addEventListener("dblclick", dblClick);
document.addEventListener("wheel", mouseWheel);


function mouseOver() {
    document.getElementById("square").style.backgroundColor = "blue";
}

function mouseOut() {
    document.getElementById("square").style.backgroundColor = "white";
}

function mouseDown() {
    document.getElementById("square").style.backgroundColor = "red";
}

function mouseUp() {
    document.getElementById("square").style.backgroundColor = "yellow";
}

function dblClick() {
    document.getElementById("square").style.backgroundColor = "green";
}

function mouseWheel() {
    document.getElementById("square").style.backgroundColor = "orange";
}