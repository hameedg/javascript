var readlineSync = require("readline-sync");
let number = readlineSync.question("enter your number");

if (number > 0) console.log("Its Positive");
else if (number < 0) console.log("Its Negative");
else if (number == 0) console.log("The number is zero");
else console.log("invalid");
