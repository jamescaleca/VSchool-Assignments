const readline = require("readline-sync")

// Ask user for number input

const num1 = readline.question("Please enter your first number -> ");
const num2 = readline.question("Please enter your second number -> ");

const operator = readline.question("Please enter the operation to perform: add, sub, mul, div -> ");


if (operator === "add") {
    console.log("The result is: " + (num1 + num2));
} else if (operator === "sub") {
    console.log("The result is: " + (num1 - num2));
} else if (operator === "mul") {
    console.log("The result is: " + (num1 * num2));
} else if (operator === "div") {
    console.log("The result is: " + (num1 / num2));
} else {
    console.log("invalid operator");
    operator;
}