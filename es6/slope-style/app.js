const collectAnimals = (...animals) => {
    return animals;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const combineFruit = (fruit, sweets, vegetables) => {return {fruit: fruit, sweets: sweets, vegetables: vegetables}}

console.log(combineFruit(["apple", "pear"],
            ["cake", "pie"],
            ["carrot"]))

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
    
const parseSentence = vacationPlaceholder => {
    return `We're going to have a good time in ${vacationPlaceholder.location} for ${vacationPlaceholder.duration}`
}
console.log(parseSentence(vacation))

const returnFirst = items => {return items[0]}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = arr => {
    return `My top three favorite activities are ${arr[0]}, ${arr[1]}, and ${arr[2]}.`;
}

console.log(returnFavorites(favoriteActivities))

const combineAnimals = (array1, array2, array3) => {
    animalsArray = [...array1, ...array2, ...array3]
    return animalsArray;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const product = (a, b, c, d, e) => {
    let numbers = [a,b,c,d,e];
    return numbers.reduce((acc, number) => {return acc * number;}, 1)
}

const unshift = (array, ...a) => {return [...a, array]}

console.log(unshift([6, 7, 8], 1, 2, 3, 4, 5))

const populatePeople = (names) => {
    return names.map((name) => {
        name = name.split(" ");
        return {firstName: `${name[0]}`, lastName: `${name[1]}`}
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]