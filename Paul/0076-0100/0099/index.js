const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8").split("\n").map(i=>i.split(",").map(i=>Number(i)));


let maxline = 0;
let maxans = Math.log10(input[0][0])*input[0][1];
let ans;

for (let i = 1;i<input.length;i++) {
  ans = Math.log10(input[i][0])*input[i][1];
  if (ans>maxans) {
    maxline = i;
    maxans = ans;
  }
}

let output = maxline+1;

if (testMode) {
  if (output !== 2) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
