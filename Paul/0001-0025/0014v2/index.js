const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let max = Number(input);

let maxlen = 0;
let maxlenfor = 0;
let len = 0;
for (let i = 2; i < max; i++) {
  len = 1;
  let j = i;
  while (j != 1) {
    if (j % 2 == 0) {
      j /= 2;
    } else {
      j = 3 * j + 1;
    }
    len++;
  }
  if (len > maxlen) {
    maxlen = len;
    maxlenfor = i;
    console.log(i, len);
  }
}

let output = maxlenfor;

if (testMode) {
  if (output !== 9) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
