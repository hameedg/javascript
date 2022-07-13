var readlineSync = require("readline-sync");
let year = readlineSync.questionInt("enter year::");

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 == 0) {
      console.log("leap year");
    } else {
      console.log("Not leap year");
    }
  } else {
    console.log("leap year.");
  }
} else {
  console.log("Not leap year");
}
