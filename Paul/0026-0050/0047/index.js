const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const key = Number(input);


let success = 0;

let i = 2;
while (success != key) {
  let noofpfactors = 0;
  let j = i;
  while (j%2 == 0) {
    j /=2;
    noofpfactors = 1;
  }
  let n = 3;
  while (j>1) {
    if (j%n == 0) {
      j/=n;
      noofpfactors++;
    }
    while (j%n == 0) {
      j/=n;
    }
    n+=2;
  }
  if (noofpfactors == key) {
    success++
  } else {
    success = 0;
  }
  i++;
}

let numbers = [];

for (a=i-key;a<i;a++) {numbers.push(a)};

let output = numbers.join(",");

if (testMode) {
  if (output !== "644,645,646") {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
