function forception(people, alphabet) {
    result = [];
    for (let i = 0; i < people.length; i++) {
        people[i] = people[i].concat(":");
        result.push(people[i]);
        for (let j = 0; j < alphabet.length; j++) {
            let upperAlph = alphabet.toUpperCase();
            let splitAlph = upperAlph.split("");
            result.push(splitAlph[j]);
        }
    }
    console.log(result)
}

let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"

forception(people, alphabet)