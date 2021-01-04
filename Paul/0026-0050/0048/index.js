const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const max = Number(input);

let modsum = 0;

for (let i = 0; i < max / 10; i++) {
  for (let j = 1; j < 10; j++) {
    let norig = 10 * i + j;
    let n = norig;
    for (let k = 1; k < norig; k++) {
      n = (n * norig) % 10000000000;
    }
    modsum = (modsum + n) % 10000000000;
  }
}

let output = modsum.toString(10);
while (output.length < 10) {
  output = "0" + output;
}

if (testMode) {
  if (output !== "0405071317") {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
