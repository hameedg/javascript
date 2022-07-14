var readlineSync = require("readline-sync");
let n = readlineSync.questionInt("enter number to check whole number::");

if (n == 0 || n > 0) console.log("Its whole number");
else console.log("Its not whole number");
