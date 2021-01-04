const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const minpower = Number(input[0]);
const maxpower = Number(input[2]);

let str = ".";

let i = 1;
while (str.length <= Math.pow(10,maxpower)) {
  str = str + "" + i;
  
  i++;
}

let product = 1;
for (let p = minpower;p<=maxpower;p++) {
  product *= Number(str[Math.pow(10,p)]);
}


let output = product;

if (testMode) {
  if (output !== 5) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
