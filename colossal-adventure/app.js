const { exit } = require("process");
const readline = require("readline-sync");
const sleep = require("system-sleep");
let playerStatus = {Name: "", Lives: 1, HP: 50, Inventory: []};

chance = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

playerAttack = chance(3, 8);

//Items
let extraLife = {Item: "Extra Life", Description: "One more life!"};
let medKit = {Item: "Med Kit", Description: "Restores 7 HP"};
let berserk = {Item: "Berserk", Description: "Doubles the user's next three attacks.", Counter: 3};
//REMEMBER TO DECREMENT COUNTER BY ONE AFTER EVERY ATTACK
const itemsList = [extraLife.Item, medKit.Item, berserk.Item];

useItem = () => {
    inventoryIndex = readline.keyInSelect(playerStatus.Inventory, "Which item would you like to use?");
    if (inventoryIndex === indexOf(extraLife)) {
        playerStatus.Lives += 1;
        console.log(`You gained an extra life! You now have ${playerStatus.Lives} lives.`)
    } else if (inventoryIndex === indexOf(medKit)) {
        playerStatus.HP += 7;
        console.log(`You gained 7 HP - you're feeling slightly invigorated!`);
    } else if (inventoryIndex === indexOf(berserk)) {
        playerAttack * 2;
        console.log("YOU USED THE BERSERK");
        console.log("ATTACKS ARE DOUBLED FOR NEXT THREE TURNS");
    } else {
        console.log("Please enter a valid number.")
        inventoryIndex;
    }
}

//Enemies
attackChance = chance(1, 3);
enemyChance = chance(0, 2);
runChance = chance(0, 1);
snatcherDmgChance = chance(5, 15);
necroticMassDmgChance = chance(7, 17);
titanDmgChance = chance(10, 22);
const enemiesList = [snatcher, necroticMass, titan];
let snatcher = {Name: "Snatcher", HP: 20, Dmg: snatcherDmgChance, Item: medKit};
let necroticMass = {Name: "Necrotic Mass", HP: 25, Dmg: necroticMassDmgChance, Item: berserk};
let titan = {Name: "Titan", HP: 32, Dmg: titanDmgChance, Item: extraLife};

battle = () => {
    let currentEnemy = enemiesList[enemyChance];
    console.log(`A ${currentEnemy} attacks!`);
    battleOptions = ["attack", "run"];
    attackOrRun = readline.keyInSelect(battleOptions, "What do you do?");
    if (attackOrRun === 0) {
        currentEnemy.HP = (currentEnemy.HP - playerAttack);
        console.log(`Your attack did ${playerAttack} damage.`)
        console.log(`${currentEnemy}'s HP is now ${currentEnemy.HP}`)
        
    } else if (attackOrRun === 1) {
        if (runChance === 0) {
            console.log("You failed to escape.");
        } else if (runChance === 1) {
            console.log("You escaped battle!");
            walk();
        }
    }
}

walk = () => {
    if (attackChance === 1) {
        //activate battle sequence
    } else {
        console.log("You walk two paces forward.")
    }
}

// INTRO

console.log("Greetings, traveler")
//sleep(1*2000);
const playerName = readline.question("What is your name? ");
console.log(playerName + "...");
playerStatus.Name = playerName;
console.log("Interesting.");
console.log(`${playerName}, you are about to embark on an adventure.`);

// GAME

console.log("What do you do now?");
console.log("Press 'w' to walk. Press 'p' for your status.");

while (playerStatus.Lives >= 1) {
    walkOrStatus = readline.prompt({limit: ["w", "p"]});
    if (walkOrStatus = "p") {
        console.log(playerStatus)
        if (readline.keyInYN("Would you like to use an item?")) {
            // which item would you like to use?
            walkOrStatus
        } else {
            console.log("Let's keep going.")
            walkOrStatus
        }
    } else if (walkOrStatus = "w") {
        walk();
    }
}