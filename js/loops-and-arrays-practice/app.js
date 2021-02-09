// #1

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
compCount = 0

for (var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] == "computer"){
        compCount += 1
    }
}
console.log(compCount)

// #2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
    }
}

// #Bonus

var lightStatus = "off"
var toggleCount = 0
var toggleArray = [1, 1, 1, 1, 3]

for (var i = 0; i < toggleArray.length; i++) {
    toggleCount += toggleArray[i]
}

if (toggleCount % 2 === 0) {
    console.log(lightStatus)
} else {
    var lightStatus = "on"
    console.log(lightStatus)
}