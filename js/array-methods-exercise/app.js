var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
var orangeIndex = fruit.indexOf("orange")
fruit.push(orangeIndex)
var vegetablesLength = vegetables.length
vegetables.push(vegetablesLength)
var food = fruit.concat(vegetables)
var removed = food.splice(4, 2)
var foodReversed = food.reverse()
var joinFood = food.join("")
console.log(joinFood)
