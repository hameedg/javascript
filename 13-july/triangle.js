var readlineSync = require("readline-sync");
let a = readlineSync.questionInt("enter length of first side::");
let b = readlineSync.questionInt("enter length of second side::");
let c = readlineSync.questionInt("enter length of third side::");

if (a + b > c) {
  if (b + c > a) {
    if (c + a > b) {
      console.log("Triangle exists..");
    }
  }
}

let sideA = a + b;
let sideB = a + c;
let sideC = b + c;
if (sideA == sideB && sideB == sideC) {
  console.log("Equalateral");
}
if (sideA == sideB && sideA != sideC) {
  console.log("Isosceles");
}
if ((sideA != sideB) == sideC) {
  console.log("Isosceles");
}
if (((sideA != sideB) != sideC) != sideA) {
  console.log("Scalene!");
}
