var readlineSync = require("readline-sync");
let n = readlineSync.questionInt("enter number to check even or odd");

if (n % 2 == 0) console.log("Its even");
else console.log("Its odd");
