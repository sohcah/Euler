const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs
  .readFileSync(testMode ? "test.txt" : "input.txt", "utf8");
  
const digits = Number(input);

let output = 0;

for (let i=2;i<1000000;i++) {
  let sum = 0;
  let n = i;
  while (n>0) {
    sum += Math.pow(n % 10,digits);
    n = Math.floor(n/10);
  }
  if (i==sum) {
    output += i;
  };
}



if (testMode) {
  if (output !== 19316) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
