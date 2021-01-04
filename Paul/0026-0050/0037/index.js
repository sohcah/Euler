const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let max = Number(input);

let sieve = new Set();
sieve.add(2);
let addon = 0;
for (let i=3;i<=max;i+=2) {sieve.add(i)};

i=3;
while (i<Math.sqrt(max)) {
  if (sieve.has(i)) {
    addon = 2*i;
    for (let j=i+addon;j<=max;j += addon) {
      sieve.delete(j);
    }
  }
  i +=2;
}

let rtol = new Set();
let ltor = new Set();
let both = new Set();

for (const p of sieve) {
  if (p>10) {
    rtoltrunc = true;
    ltortrunc = true;
    for (let i = 0;i<Math.log10(p)-1;i++) {
      if (!sieve.has(p % Math.pow(10,i+1))) {ltortrunc = false};
      if (!sieve.has(Math.floor(p/Math.pow(10,i+1)))) {rtoltrunc = false};
    }
    if (rtoltrunc == true) {rtol.add(p)};
    if (ltortrunc == true) {
      ltor.add(p);
      if (rtoltrunc == true) {both.add(p)};
    }
  }
}

console.log(ltor);
console.log(rtol);
console.log(both);

let sum = 0;

for (const p of both) {
  sum += p;
}

let output = sum;

if (testMode) {
  if (output !== 13) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
