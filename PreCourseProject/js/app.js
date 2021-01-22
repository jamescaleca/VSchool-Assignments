var putInSlacks = document.getElementById("put-in-slacks");
var somethingElse = document.getElementById("something-else");
var snackForm = document.getElementById("snack-form");
const snacksGiven = document.getElementById("snacks-given");
const subBtn = document.getElementById("submit")
const firstSnack = document.getElementById("first-snack");
const dailyDotForm = document.getElementById("daily-dot-form");

// Yakko Section

putInSlacks.addEventListener("click", function() {
    alert("That's right! Here's some bologna for your slacks!");
})
somethingElse.addEventListener("click", function() {
    alert("Wrong! The best use is to put the bologna in the slacks.");
})

// Wakko Snacks

let favSnacks = [];
let snackCount = favSnacks.length;
let snack = document.getElementById("snack");

var possiblesnacks = {
    breakfast: "toast",
    lunch: "donuts",
    dinner: "tacos",
    dessert: "sopapillas"
}

var notacceptible = ["antifreeze", 1234, "yomama"];

subBtn.addEventListener("click", function() {
    if (snack.value == possiblesnacks.breakfast, possiblesnacks.lunch, possiblesnacks.dinner, possiblesnacks.dessert) {
        snackCount++
        favSnacks.push(snack.value)
        alert("You have given the Wakko " + favSnacks.slice(-1)[0] + ".");
    } else if (snack.value == notacceptible) {
        alert("That's not a snack!")
    } else {
        alert("That's not a snack!")
    }
    document.getElementById("snack-counter").innerText = snackCount;
    console.log(favSnacks);
})

snacksGiven.addEventListener("click", function() {
    alert("Wakko has had these snacks today: " + favSnacks);
})

firstSnack.addEventListener("click", function() {
    for(var i = 0; i < snackCount; i++){
        console.log(favSnacks[0])
    }
    alert("The first snack we gave Wakko was: " + favSnacks[0]);
})

// Daily Dot

function addTweet(event) {
    event.preventDefault();
    const tweet = dailyDotForm.tweet.value;
    const newTweetLi = document.createElement("li");
    const newTweetProfile = document.createElement("div");
    newTweetProfile.className = "dot-profile";
    const newTweetText = document.createElement("span");
    newTweetText.innerText = tweet;
    const tweets = document.getElementById("tweets").getElementsByTagName("ul")[0];
    const newerTweetLi = tweets.appendChild(newTweetLi);
    newerTweetLi.appendChild(newTweetProfile);
    newerTweetLi.appendChild(newTweetText);
    dailyDotForm.tweet.value = "";
}

dailyDotForm.onsubmit = addTweet;