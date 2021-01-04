const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let max = Number(input);

const fact = [1,1,2,6,24,120,720,5040,40320,362880];

let total = 0;

for (let i=10;i<max;i++) {
  let j = i;
  let sum = 0;
  while (j>0 && sum<=i) {
    sum += fact[j % 10];
    j=Math.floor(j/10);
  }
  if (i==sum) {
    //console.log(i);
    total += i;
  }
}

let output = total;

if (testMode) {
  if (output !== 145) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
