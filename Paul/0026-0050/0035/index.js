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

let circprimes = [];

for (const p of sieve) {
  strp = p.toString(10);
  circular = true;
  for (let i = 1;i<strp.length;i++) {
    strp = strp.slice(1) + strp[0];
    if (!sieve.has(Number(strp))) {circular = false};
  }
  if (circular == true) {circprimes.push(p)};
}


let output = circprimes.length;

if (testMode) {
  if (output !== 13) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
