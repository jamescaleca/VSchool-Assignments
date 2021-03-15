//#1
function total(arr) {return arr.reduce((final, num) => final += num)}

console.log(total([1,2,3])); // 6

//#2
function stringConcat(arr) {return arr.reduce((final, str) => `${final}${str}`)}

console.log(stringConcat([1,2,3])); // "123"

//#3
function totalVotes(arr) {return arr.reduce((final, person) => {
    if (person.voted){
        final++;
    }
    return final
}, 0)}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

//#4
function shoppingSpree(arr) {return arr.reduce((final, item) => {
    final += item.price
    return final
}, 0)}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

//#5
function flatten(arr) {return arr.reduce((final, current) => final.concat(current))}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//#6
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((final, current) => {
        if(current.age >= 18 && current.age <= 25) {
            final.numYoungPeople++
        } else if(current.age >= 26 && current.age <= 35) {
            final.numMidsPeople++
        } else if(current.age >= 36 && current.age <= 55) {
            final.numOldsPeople++
        }
        if(current.age >= 18 && current.age <= 25 && current.voted === true) {
            final.numYoungVotes++
        } else if (current.age >= 26 && current.age <=35 && current.voted === true) {
            final.numMidVotesPeople++
        } else if (current.age >= 36 && current.age <= 55 && current.voted === true) {
            final.numOldVotesPeople++
        }
        return final
    }, {numYoungVotes: 0, 
        numYoungPeople: 0, 
        numMidVotesPeople: 0, 
        numMidsPeople: 0, 
        numOldVotesPeople: 0, 
        numOldsPeople: 0})
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/