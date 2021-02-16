//Write a function that takes an array of numbers and returns the largest number.
//largest number is 0 before the function
//Pass through each number in array
//If the number is larger than the largest, make that the largest number.
//Console log the largest
largest = 0;

largestNum = (array) => {
    for (i = 0; i <= largest; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    console.log(largest)
}

largestNum([3, 5, 2, 8, 1])

//Write a function that takes an array of words and a character and returns each word that has that character present.
//Iterare through the array
//Iterate through each word
//If the word contains the specified character, add that word to the charArray
//Console.log charArray
let charArray = []
containsChar = (arr, character) => {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === character) {
                charArray.push(arr[i])
            }
        }
    }
    console.log(charArray)
}
containsChar(["#3", "$$$", "C%4!", "Hey!"], "!")

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2

isDivisible = (num1, num2) => {
    if (num1 % num2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isDivisible(4, 2)
isDivisible(9, 3)
isDivisible(15, 4)