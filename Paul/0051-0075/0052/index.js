const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let max = Number(input);

let i = 1;
let str = "";
let success = false;
while (success == false) {
  str = i.toString().split("").sort().join("");
  success = true;
  for (j=2;j<=max;j++) {
    if ((i*j).toString().split("").sort().join("") != str) {success=false};
  }
  i++;
}

let output = i-1;

if (testMode) {
  if (output !== 125874) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
