document.getElementById("square").addEventListener("mouseover", mouseOver);
document.getElementById("square").addEventListener("mouseout", mouseOut);
document.getElementById("square").addEventListener("mousedown", mouseDown);
document.getElementById("square").addEventListener("mouseup", mouseUp);
document.getElementById("square").addEventListener("dblclick", dblClick);
document.addEventListener("wheel", mouseWheel);

window.addEventListener("keydown", changeColor) 

    function changeColor() {
        console.log(square.style.background)
        if (event.which === 82) {
            square.style.background = "red"
        } else if (event.which === 89){
            square.style.background = "yellow"
        } else if (event.which === 71){
            square.style.background = "green"
        } else if (event.which === 79){
            square.style.background = "orange"
        } else if (event.which === 66){
            square.style.background = "blue"
        }
    }


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

function blueKey() {
    document.getElementById("square").style.backgroundColor = "blue";

}