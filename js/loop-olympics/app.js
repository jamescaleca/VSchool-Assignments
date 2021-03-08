// Preliminaries

for (var i = 0; i <= 9; i++) {
    console.log(i)
}

for (var i = 9; i >= 0; i--) {
    console.log(i)
}

var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

// Bronze

var arr1 = []
for (var i = 0; i <= 9; i++) {
    arr1.push(i)
}
console.log(arr1)

for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

var fruitBronze = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var everyOtherFruit = [];

for (var i = 0; i < fruitBronze.length; i += 2) {
    everyOtherFruit.push(fruitBronze[i])
}
console.log(everyOtherFruit)

// Silver

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

var nameArray = []
var occupationArray = []

for (var i = 0; i < peopleArray.length; i++) {
    nameArray.push(peopleArray[i].name)
    occupationArray.push(peopleArray[i].occupation)
}

console.log(nameArray)
console.log(occupationArray)

var altName = []
var altOcc = []

for (var i = 0; i < peopleArray.length; i += 2) {
    altName.push(peopleArray[i].name)
    altOcc.push(peopleArray[i].occupation)
}

console.log(altName)
console.log(altOcc)

// Gold

// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

var firstMatrix = [];

for (var i = 0; i <= 3; i++) {
    for (var j = 0; i <= 3; i++) {
        firstMatrix[i][j].push(0)
    }
}
console.log(firstMatrix)
f