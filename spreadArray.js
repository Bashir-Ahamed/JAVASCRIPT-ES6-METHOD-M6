const number = [2, 3, 4, 6, 2, 76, 2];
const number1 = [34, 56, 23];

// console.log(Math.min(1, 2, 5, 5, 6, 3));
// console.log(Math.min(number));
console.log(...number);
console.log(Math.min(...number));
console.log(Math.max(...number));
const newNum = [...number, ...number1, 45, 5654, 34, 345, 334];
console.log(newNum);
console.log(Math.max(...newNum));
console.log(Math.min(...newNum));
