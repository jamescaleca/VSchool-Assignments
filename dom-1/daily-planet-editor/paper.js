/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function whoWins(isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++) {
    function isThereKryptonite() {
        if (i % 2 === 0) {
            isThereKryptonite === true;
        } else {
            isThereKryptonite === false;
        }
    }
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function loisLaneAttraction() {
    // 1 is not at all attracted, 10 is "super" attracted.
    return Math.floor((Math.random() * 10) + 1);
}

console.log(loisLaneAttraction());

var clarkKent = true;
var superMan = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var quickChange = math.random();
    if (quickChange >= 0.5) {
        clarkKent === false;
        superMan === true;
        console.log("Now I'm Superman!");
    }
}
