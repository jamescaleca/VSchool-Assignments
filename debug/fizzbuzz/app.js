fizzBuzzCounter = 0;
fizzCounter = 0;
buzzCounter = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + "FizzBuzz");
        fizzBuzzCounter += 1;
    } else if (i % 3 === 0) {
        console.log(i + "Fizz");
        fizzCounter += 1
    } else if (i % 5 === 0) {
        console.log(i + "Buzz");
        buzzCounter += 1
    } else {
        console.log(i);
    }
}

let counterObject = {fizzbuzz: fizzBuzzCounter, fizz: fizzCounter, buzz: buzzCounter}
console.log(counterObject)