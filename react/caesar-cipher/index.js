const readline = require('readline-sync');
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));

caesarCipher = (str, num) => {
    //In case the input number is > 26 or < 0
    num = num % 26;

    let newStr = '';
    for(let i = 0; i < str.length; i++) {

        let currentLetter = str[i]
        //For white space in input
        if(currentLetter === ' ') {
            newStr += currentLetter
            continue
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        if(str[i] === str[i].toUpperCase()) {newStr += alphabet[newIndex].toUpperCase();}
        else newStr += alphabet[newIndex];
    }
    return newStr;
}

console.log(caesarCipher(input, shift))