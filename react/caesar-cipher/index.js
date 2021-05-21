const readline = require('readline-sync');
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

caesarCipher = (str, num) => {
    num = num % 26;
    let newStr = '';
    for(let i = 0; i < input.length; i++) {
        let currentLetter = input[i]
        if(currentLetter === '') {
            newStr += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        if(str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        }
        else newStr += alphabet[newIndex];
    }
    return newStr;
}

const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));
console.log(caesarCipher(input, shift))