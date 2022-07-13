var readlineSync = require("readline-sync");
let a = readlineSync.questionInt("enter first number::");
let b = readlineSync.questionInt("enter second number::");
let c = readlineSync.questionInt("enter third number::");

let i = 0;

while (i <= a || i <= b || i <= c) i = i + 1;

console.log(i - 1);
