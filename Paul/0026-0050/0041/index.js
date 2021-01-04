const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const n = Number(input);
let digstr =""
for (let i = 1;i<=n;i++) {
  digstr += "" + i;
}

let sieve = new Set();
sieve.add(2);
let addon = 0;
for (let i=3;i<=Math.pow(10,n);i+=2) {sieve.add(i)};


let ndigprimes = [];

let i=3;

while (i<Math.sqrt(Math.pow(10,n))) {
  if (sieve.has(i)) {
    addon = 2*i;
    for (let j=i+addon;j<=Math.pow(10,n);j += addon) {
      sieve.delete(j);
    }
  }
  i +=2;
}
let min = Math.pow(10,n-1);
for (const p of sieve) {
  if (p>min) {ndigprimes.push(p)}
}

let maxpan = 0;
for (const p of ndigprimes) {
  if (p.toString(10).split("").sort().join("") == digstr && p>maxpan) {maxpan = p};
}

let output = maxpan;

if (testMode) {
  if (output !== 4231) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
