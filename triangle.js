var readlineSync = require("readline-sync");
let a = readlineSync.questionInt("enter side A::");
let b = readlineSync.questionInt("enter side B::");
let c = readlineSync.questionInt("enter side C::");

if (a + b > c && b + c > a && c + a > b) {
  console.log("Triangle Exists....");
  if (a == b && b == c) console.log("Its Equilateral");
  if (a == b || b == c || c == a) console.log("Its Isoceles");
  else console.log("Its Scalene");
} else console.log("It doesn't exists");
