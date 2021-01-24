const { exit } = require("process");
const readline = require("readline-sync");
const sleep = require("system-sleep");
let aliveStatus = true;
let hasKey = false;
let doorUnlocked = false;

// DECISIONS //

function firstDecision() {
    firstOptions = ["look to your left", "look to your right", "look behind you", "look in front of you"],
    firstIndex = readline.keyInSelect(firstOptions, "What do you do? ");

    if (firstIndex === 0) {
        sleep(1*1000);
        console.log("You see nothing of significance.");
        sleep(2*1000);
        firstDecision();
    } else if (firstIndex === 1) {
        sleep(1*1000);
        console.log("You see something shiny on the ground.");
        sleep(2*1000);
        if (readline.keyInYN("Would you like to investigate?")) {
            console.log("You walk over to the shiny thing. It's a key! It has been added to your inventory.");
            sleep(3*1000);
            hasKey = true;
        } else {
            sleep(1*1000);
            console.log("Well, whatever. It was probably nothing anyway...");
            sleep(2*1000);
            firstDecision();
        }
    } else if (firstIndex === 2) {
        sleep(1*1000);
        console.log("You see a hole just big enough to fit your arm in.");
        sleep(2*1000);
        if (readline.keyInYN("Would you like to investigate?")) {
            sleep(1*1000);
            console.log("You stick your hand in the hole. You reach in farther and farther, searching blindly for anything that could be of use.");
            sleep(3*1000);
            console.log("You hear a low growl, seemingly coming from whatever might be on the other end of the hole.");
            sleep(3*1000);
            console.log("Suddenly, the monster on the other side bites your arm clean off. There is no possible way for you to stop the bleeding. After minutes of bleeding and agony, you are dead.");
            sleep(5*1000);
            aliveStatus = false;
        } else {
            sleep(1*1000);
            console.log("You remember the words your mama told you: 'Don't go sticking your arm in strange arm-shaped holes.'")
            sleep(3*1000);
            firstDecision();
        }
    } else if (firstIndex === 3) {
        sleep(1*1000);
        console.log("You see in front of you the locked iron door. You try to open it, but it won't budge.");
        sleep(3*1000);
        firstDecision();
    }
}

function secondDecision() {
    secondOptions = ["check out the arm-sized hole at the other end of the room","try to unlock the door","do nothing"],
    secondIndex = readline.keyInSelect(secondOptions, "What do you do now?");

    if (secondIndex === 0) {
        sleep(1*1000);
        console.log("You walk over to the other side of the room to check out the arm-sized hole. You hear a low growl coming from the other side.");
        sleep(3*1000);
        if (readline.keyInYN("Stick your arm in the hole?")) {
            sleep(1*1000);
            console.log("You stick your arm in the hole. You have ignored your mama's words.");
            sleep(3*1000);
            console.log("The monster on the other side of the hole bites your arm clean off.");
            sleep(3*1000);
            console.log("Within minutes, you bleed out and die.");
            sleep(3*1000);
            aliveStatus = false;
        } else {
            sleep(1*1000);
            console.log("Although you have an overwhelming urge to stick your arm in the arm-sized hole, your logic prevails and you step away from it.");
            sleep(3*1000);
            secondDecision();
        }
    } else if (secondIndex === 1) {
        sleep(1*1000);
        console.log("You walk to the large iron door, key in hand.");
        sleep(2*1000);
        if (readline.keyInYN("Would you like to try and unlock it?")) {
            sleep(1*1000);
            doorUnlocked = true;
        } else {
            sleep(1*1000);
            secondDecision();
        }
    } else if (secondIndex === 2) {
        sleep(4*1000);
        console.log("You decide to do nothing.");
        sleep(5*1000);
        console.log("In just five minutes, a guard unlocks the door, comes in, and takes you away to be executed.");
        sleep(3*1000);
        aliveStatus = false;
    }
}


// INTRO //

sleep(1*1000);
console.log("Greetings, traveler.");
sleep(3*1000);
const name = readline.question("What is your name? ");
console.log(name + "...");
sleep(2*1000);
console.log("What a peculiar name.");
sleep(2*1000);
console.log(name + ", you are in a particularly sticky situation.");
sleep(2*1000);
console.log("You find yourself in a small room. No windows, no furniture. A locked iron door ahead.");
sleep(3*1000);
console.log("You hear the tortured screams of people to your left and right. Your task: get out of this room, or die.");
sleep(3*1000);

// GAME //

firstDecision();

if (aliveStatus === false) {
    console.log("YOU DIED");
    exit();
} else if (aliveStatus === true) {
    console.log("Congratulations! You have a key. I wonder what this could unlock...");
    secondDecision();
}

if(doorUnlocked === true) {
    console.log("Congratulations! You've unlocked the door!");
    sleep(2*1000);
    console.log("You feel overwhelming confidence and hope. You escape from the room to make your daring escape from the dungeon.");
    sleep(3*1000);
    console.log("You live to fight another day.");
    sleep(3*1000);
    console.log("GAME OVER");
} else if(aliveStatus === false) {
    console.log("YOU DIED");
    exit();
}