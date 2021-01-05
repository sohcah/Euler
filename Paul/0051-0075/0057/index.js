const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const max = Number(input);
let count = 0;
let na = 3n;
let nb = 7n;
let da = 2n;
let db = 5n;
let temp = 0n;

for (i=3;i<=max;i++) {
  temp = nb;
  nb = na+2n*nb;
  na = temp;
  temp = db;
  db = da+2n*db;
  da = temp;
  //console.log(nb,db);
  if (nb.toString().length > db.toString().length) {count++};
}

let output = count;

if (testMode) {
  if (output !== 1) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
