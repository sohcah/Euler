const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const pents = [];

for (let i = 1; i <= 10000; i++) {
  pents.push((i * (3 * i - 1)) / 2);
}

let d;
let low;
let high;

let found = false;
let i = 0;
while ((found == false)) {
  d = pents[i];
  low = 0;
  high = 1;
  while (low != high) {
    if (pents[high] - pents[low] == d) {
      if (pents.includes(pents[low]+pents[high])) {
        found = true;
        output = d;
      };
      low++;
      high++;
    } else {
      if (pents[high] - pents[low] < d) {
        high++;
      } else {
        low++
      }
    }
  }

  i++;
}

if (testMode) {
  if (output !== 2) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
