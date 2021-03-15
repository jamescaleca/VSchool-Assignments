//#1
function doubleNumbers(arr){return arr.map(num => num * 2);}

console.log(doubleNumbers([2, 5, 100]));

//#2
function stringItUp(arr){return arr.map(num => JSON.stringify(num));}

console.log(stringItUp([2, 5, 100]));

//#3
function capitalizeNames(arr){
    return arr.map(person => {
        const newPerson = person[0].toUpperCase() + (person.slice(1).toLowerCase());
        return newPerson;
    })
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//#4
function namesOnly(arr){return arr.map(person => {return person.name;})}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

//#5
function makeStrings(arr){
    return arr.map(person => {
        if (person.age >= 18) {
            return `${person.name} can go to the Matrix!`
        } else {
            return `${person.name} is too young!`
        }
    })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

//#6
function readyToPutInTheDOM(arr){return arr.map(person => {return `<h1>${person.name}</h1><h2>${person.age}</h2>`})}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 