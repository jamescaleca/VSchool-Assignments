function capAndLow(str) {
    let capStr = str.toUpperCase();
    let lowStr = str.toLowerCase();
    result = capStr.concat(lowStr);
    return result;
}
console.log(capAndLow("HelLo"))

function halfLength(str) {
    let strLength = str.length;
    let halfLength = strLength / 2;
    let closestInt = Math.floor(halfLength);
    return closestInt;
}
console.log(halfLength("Hello"))

function returnFirstHalf(str) {
    let firstHalf = str.slice(0, halfLength(str));
    return firstHalf;
}
console.log(returnFirstHalf("Hello"))

function firstCapSecondLow(str) {
    let firstHalf = returnFirstHalf(str);
    let firstCap = firstHalf.toUpperCase();
    let middleIndex = Math.floor(str.length / 2);
    let secondHalf = str.slice(middleIndex, str.length[-1]);
    let secondLow = secondHalf.toLowerCase();
    return firstCap + secondLow;
}
console.log(firstCapSecondLow("Hello WoRld"))