const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const max = Number(input);

let sieve = new Set();
let odds = new Set();
sieve.add(2);
let addon = 0;
for (let i=3;i<=max;i+=2) {
  sieve.add(i);
  odds.add(i);
};

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

let dnsq = [];

for (let n = 0;n<Math.sqrt(max/2);n++) {
  dnsq.push(2*n*n);
}

for (p of sieve) {
  for (d of dnsq) {
    odds.delete(p+d);
  }
}

console.log(odds);

let output = 0;

if (testMode) {
  if (output !== 40755) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
