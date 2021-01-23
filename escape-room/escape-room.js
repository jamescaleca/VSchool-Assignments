const readline = require("readline-sync");
const sleep = require("system-sleep");
const aliveStatus = true;

// Intro //

sleep(1*1000);
console.log("Greetings, traveler.");
sleep(3*1000);
const name = readline.question("What is your name? ");
console.log(name + "...")
sleep(2*1000)
console.log("What a peculiar name.")
sleep(2*1000);
console.log(name + ", you are in a particularly sticky situation.");
console.log("You find yourself in a small room. No windows, no furniture. A locked iron door ahead.");
console.log("You hear the tortured screams of people to your left and right. Your task: get out of this room.");
sleep(2*1000);

// Decisions //

