const {exit} = require("process");
const readline = require("readline-sync");
const sleep = require("system-sleep");
let playerStatus = {Name: "", Lives: 1, HP: 35, Inventory: [], WalkedPaces: 0};
chance = (min, max) => {return Math.floor(Math.random() * (max - min + 1)) + min;}

//Die
die = () => {
    console.log("You've been consumed by the undead.");
    console.log("GAME OVER");
    exit();
}

// INTRO

console.log("'Hello?'");
console.log("'Does anyone copy?'");
console.log("'This is the emergency rescue ship from the planet Z-8943739-K20'");
console.log("'I'm sending out this call for any potential survivors of the FoeHammer.'");
console.log("'Is anybody alive on there?'");
firstChoice = ["Copy", "Do nothing"];
firstChoiceResponse = readline.keyInSelect(firstChoice, "Can anyone hear me?")
if (firstChoiceResponse === 0) {
    console.log("YOU: 'Copy that emergency team'");
    console.log("OPERATOR: 'Thank goodness! You're the first response I've gotten.'");
} else if (firstChoiceResponse === 1) {
    console.log("You do nothing.");
    console.log("You go down with the ship.");
    console.log("GAME OVER");
    exit();
} else {
    exit();
}

//sleep(2*1000);
const playerName = readline.question("OPERATOR: 'What is your name?' ");
playerStatus.Name = playerName;
console.log(`OPERATOR: '${playerName} ...'`);
console.log("OPERATOR: 'Interesting.'");
console.log(`OPERATOR: '${playerName}, you are on a dying vessel.'`);
console.log(`OPERATOR: 'It is imperative that you find an escape pod ASAP.'`);
console.log(`OPERATOR: 'Are you able to do so, soldier?'`);
console.log("You have minor, treatable injuries. You are determined to go on living.")
console.log(`YOU: 'I'm gonna have to. I'll radio you when I get to it.'`);
console.log(`YOU: 'Over and out'`);
console.log("You start to hear the voices of your comrades.");
console.log("Except...");
console.log("Something is off about the way they sound");
console.log("Are they actually speaking words?");

//different color?
console.log("A comrade of yours rounds the corner of the dark room you just woke up in.");
console.log("He is hunched and walking in a disturbing fashion.");
console.log("As he gets closer, you can just see that his eyes are completely glassed over.");
console.log("And as he gets closer still, you can now see that he is missing his right cheek. You can see his teeth and tongue through it.");
console.log("He sees you notice him and starts picking up the pace. Would start running if not for the limp in his left leg.");
console.log("Your comrade was definitely at one point a living person. But it is becoming all too clear he is something different now. A shell of what he once was.");
console.log("Your shock leaves you completely immobile. You know you have to make a very hard decision, and very soon. He starts to gurgle and drool as he limps towards you at full speed.");
console.log("Just when you can start to smell your fallen comrade, a large steel beam detaches from the ceiling on one side and falls on him.");
console.log("As you begin to hear similar gurgling and groaning from outside of the room, you recognize just how dire your situation is.");
console.log("Ultimately, to survive, you must make it to an escape pod.");

//Items
const extraLife = {Item: "Extra Life", Description: "One more life!"};
const medKit = {Item: "Med Kit", Description: "Restores 7 HP"};
const berserk = {Item: "Berserk", Description: "Doubles the user's next three attacks."};
const itemsList = [extraLife.Item, medKit.Item, berserk.Item];

//Enemies
let snatcher = {Name: "Snatcher", HP: 20, Dmg: chance(5, 15), Item: medKit.Item};
let necroticMass = {Name: "Necrotic Mass", HP: 25, Dmg: chance(7, 17), Item: berserk.Item};
let titan = {Name: "Titan", HP: 30, Dmg: chance(10, 19), Item: extraLife.Item};
let enemiesList = [snatcher, necroticMass, titan];

playerAttack = chance(7, 13);

battle = () => {
    let currentEnemy = enemiesList[chance(0, (enemiesList.length - 1))];
    let enemyIndex = enemiesList.indexOf(currentEnemy);
    console.log(`A ${currentEnemy.Name} attacks!`);
    battleOptions = ["attack", "run"];

    //Attacks
    attack = () => {
        console.log(`You attack the ${currentEnemy.Name}.`);
        currentEnemy.HP = (currentEnemy.HP - playerAttack);
        console.log(`Your attack did ${playerAttack} damage.`);
        if (currentEnemy.HP > 0) {
            console.log(`${currentEnemy.Name}'s HP is now ${currentEnemy.HP}`);
            counterAttack();
            return;
        }
        return;
    }
    counterAttack = () => {
        console.log(`${currentEnemy.Name} unleashes an attack...`);
        playerStatus.HP = playerStatus.HP - currentEnemy.Dmg;
        console.log(`You have ${playerStatus.HP} HP`)
        if (playerStatus.HP <= 0) {
            playerStatus.Lives = playerStatus.Lives - 1;
            if (playerStatus.Lives > 0) {
                playerStatus.HP = 35;
                console.log("Your extra life has been used up.");
                return;
            } else if (playerStatus.Lives === 0) {
                die();
            }
            return;
        }
    }
    continueBattle = () => {
        attackOrRun = readline.keyInSelect(battleOptions, "What do you do?");
        //Attack
        if (attackOrRun === 0) {
            attack();
            return;
        //Run
        } else if (attackOrRun === 1) {
            escapeChance = chance(0, 1);
            if (escapeChance === 1) {
                console.log("You escaped battle!");
                playerContinue();
                return;
            } else if (escapeChance === 0) {
                console.log("You failed to escape.");
                counterAttack();
                continueBattle();
                return;
            }
            return;
        }
        return;
    }
    while (currentEnemy.HP > 0 ) {
        continueBattle();
    }
    if (currentEnemy.HP <= 0) {
        console.log(`You killed the ${currentEnemy.Name}!`);
        playerStatus.Inventory.push(currentEnemy.Item);
        console.log(`You looted a ${currentEnemy.Item} from the ${currentEnemy.Name}!`);
        currentEnemy.HP = currentEnemy.HP + enemyIndex.HP
        //sleep(1 * 1000);
        console.log(`${currentEnemy.Item} ADDED TO INVENTORY`);
        return;
    }
    return;
}

useItem = () => {
    while (playerStatus.Inventory.length > 0) {
        inventoryIndex = readline.keyInSelect(playerStatus.Inventory, "Which item would you like to use?");
        //Extra life
        if (inventoryIndex === playerStatus.Inventory.indexOf(extraLife.Item)) {
            playerStatus.Lives = playerStatus.Lives + 1;
            let itemIndex = playerStatus.Inventory.indexOf(extraLife.Item);
            playerStatus.Inventory.splice(itemIndex, 1);
            console.log(`You gained an extra life! You now have ${playerStatus.Lives} lives.`);
            playerContinue();
        //Med Kit
        } else if (inventoryIndex === playerStatus.Inventory.indexOf(medKit.Item)) {
            playerStatus.HP += 7;
            let itemIndex = playerStatus.Inventory.indexOf(medKit.Item);
            playerStatus.Inventory.splice(itemIndex, 1);
            console.log(`You gained 7 HP - you're feeling slightly invigorated!`);
            playerContinue();
        //Berserk
        } else if (inventoryIndex === playerStatus.Inventory.indexOf(berserk.Item)) {
            Object.assign(playerStatus, {BerserkCounter: 3})
            if (playerStatus["berserk counter"] > 0) {
                playerAttack = playerAttack * 2;
            } else if (playerStatus["berserk counter"] = 0) {
                console.log("Your berserk has been used up. Attacks are now back to normal.")
            }
            let itemIndex = playerStatus.Inventory.indexOf(berserk.Item);
            playerStatus.Inventory.splice(itemIndex, 1);
            console.log("YOU USED THE BERSERK");
            console.log("ATTACKS ARE DOUBLED FOR NEXT THREE TURNS");
            playerContinue();
        } else if (inventoryIndex === 0) {
            console.log("Let's keep going...")
            playerContinue();
        }
    } 
    if (playerStatus.Inventory.length === 0) {
        console.log("You have no items in your inventory...")
        playerContinue();
    }
}
//Game Completed
completeGame = () => {
    console.log("Great job! You made it to the escape pod!");
    console.log("You latch the escape pod door behind you.");
    console.log("As your escape pod rockets away to the rescue ship, you look behind you.");
    console.log("You see a corpse of the ship you once called home.");
    console.log("Completely dark, without any sign of life.");
    console.log("As far as you know, you are the only survivor.");
    console.log("You have overcome the undead and live to see another day.");
    console.log("GAME OVER");
    exit();
}

playerContinue = () => {
    console.log("What do you do now?")
    console.log("'w' to walk, 'p' for player status")
    walkOrStatus = readline.prompt({limit: ["w", "p"]});
    if (walkOrStatus === "p") {
        console.log(playerStatus)
        if (readline.keyInYN("Would you like to use an item?")) {
            useItem();
            return;
        } else {
            console.log("Let's keep going.");
            playerContinue();
            return;
        }
    } else if (walkOrStatus === "w") {
        if (chance(0, 1) === 1) {
            battle();
        } else {
            playerStatus.WalkedPaces += 2;
            console.log("You walk two paces forward.");
            if (playerStatus.WalkedPaces === 6) {
                completeGame();
            }
        }
        playerContinue();
        return;
    }
    return;
}
while (playerStatus.WalkedPaces < 6) {
    playerContinue();
}