const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8").split("\n");

let max = Number(input[0]);
let morethan = Number(input[1]);
let count = 0;

for (let n = 1;n<=max;n++) {
  let i = 0;
  nCi = 1;
  while (nCi<=morethan && i<=n/2) {
    nCi *= (n-i)/(i+1);
    i++;
  }
  if ((i-1) != Math.floor(n/2)) {
    count += n-2*i+1
  }
}


let output = count;

if (testMode) {
  if (output !== 7) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
