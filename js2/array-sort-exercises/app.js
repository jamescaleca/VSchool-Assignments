//#1
function leastToGreatest(arr) {
    arr.sort((a, b) => a - b)
    return arr;
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

//#2
function greatestToLeast(arr) {
    arr.sort((a, b) => b - a)
    return arr;
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 

//#3
function lengthSort(arr) {
    arr.sort((a, b) => a.length - b.length)
    return arr;
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 

//#4
function alphabetical(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    return arr;
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 

//#5
function byAge(arr){
    arr.sort((a, b) => a.age - b.age);
    return arr;
}

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]