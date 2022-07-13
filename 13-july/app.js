var readlineSync = require("readline-sync");
let marks = readlineSync.questionInt("enter your marks");

if (marks >= 90) console.log("outstanding O");
if (marks >= 80 && marks < 90) console.log("A");
if (marks >= 70 && marks < 80) console.log("B");
if (marks >= 60 && marks < 70) console.log("C");
if (marks >= 50 && marks < 60) console.log("D");
if (marks >= 40 && marks < 50) console.log("E");
