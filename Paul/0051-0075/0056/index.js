const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const max = BigInt(input);
let ans = 1n;
let maxdigsum = 0;

for (let a=1n;a<max;a++) {
  ans = 1n;
  for (let b=1n;b<max;b++) {
    ans *= a;
    digsum = ans.toString().split("").map(i=>Number(i)).reduce(function(a, b){return a+b;});
    //console.log(a,b,digsum);
    if (digsum>maxdigsum) {maxdigsum = digsum};
  }
}

let output = maxdigsum;

if (testMode) {
  if (output !== 45) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
