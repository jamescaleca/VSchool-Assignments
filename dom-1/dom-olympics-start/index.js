// Qualifier

const myHeader = document.createElement("h2");
myHeader.textContent = "JavaScript made this!!"
header.append(myHeader)
myHeader.style.textAlign = "center"

const newH = document.createElement("h3")
newH.textContent = "James "
header.append(newH)
newH.style.color = "peachpuff"
newH.style.textAlign = "center"

var span = document.createElement("span")
span.textContent = ("wrote the JavaScript")
newH.append(span)
span.style.color = "black"



// Bronze

const firstLMessage = document.querySelectorAll(".message.left")[0];
const secondLMessage = document.querySelectorAll(".message.left")[1];
const firstRMessage = document.querySelectorAll(".message.right")[0];
const secondRMessage = document.querySelectorAll(".message.right")[1];
firstLMessage.textContent = "hello, what's your name?"
secondLMessage.textContent = "cool! i'm tim."
firstRMessage.textContent = "Schmeckeldorf Squirepin"
secondRMessage.textContent = "Good talk."

const clearButton = document.getElementById("clear-button")
const messageTwo = document.querySelectorAll(".message");
clearButton.addEventListener("click", function() {
    for (var i = 0; i < messageTwo.length; i++) {
        document.querySelectorAll(".message")[i].innerHTML = ""
    }
})