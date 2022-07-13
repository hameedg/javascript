var readlineSync = require("readline-sync");
let a = readlineSync.questionInt("enter the coefficient of x^2::");
let b = readlineSync.questionInt("enter the coefficient of x::");
let c = readlineSync.questionInt("enter constant::");

let d = b * b - 4 * a * c;
console.log("discriminant is", d);
if (d > 0) {
  console.log("There exists two distict roots");
  let first = -b + Math.sqrt(d);
  let second = -b - Math.sqrt(d);

  console.log(first / (2 * a), "and", second / (2 * a));
}

if (d == 0) {
  console.log("There exists two roots and are equal");

  console.log(-b / (2 * a), "and", -b / (2 * a));
} else {
  console.log("The values results as an imaginary roots");
  console.log("Try different values to get roots");
}
