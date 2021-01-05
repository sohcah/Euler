const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let max = Number(input);

let sieve = new Set();
sieve.add(2);
let addon = 0;
for (let i = 3; i <= max; i += 2) {
  sieve.add(i);
}

i = 3;
while (i < Math.sqrt(max)) {
  if (sieve.has(i)) {
    addon = 2 * i;
    for (let j = i + addon; j <= max; j += addon) {
      sieve.delete(j);
    }
  }
  i += 2;
}

sieve = new Set([...sieve].sort((a, b) => a - b).map((i) => i.toString()));

let count = 1;
let maxcount = 1;
let maxp = 0;
let maxdig;
let t;

for (p of sieve) {
  if (p.includes("0")) {
    count = 1;
    for (i = 1; i < 10; i++) {
      if (sieve.has(p.replace(/0/g, i.toString()))) {
        count++;
      }
    }
    if (count > maxcount) {
      maxcount = count;
      maxp = p;
    }
  }
  if (p.includes("1")) {
    count = 1;
    for (i = 2; i < 10; i++) {
      if (sieve.has(p.replace(/1/g, i.toString()))) {
        count++;
      }
    }
    if (count > maxcount) {
      maxcount = count;
      maxp = p;
    }
  }
  if (p.includes("2")) {
    count = 1;
    for (i = 3; i < 10; i++) {
      if (sieve.has(p.replace(/2/g, i.toString()))) {
        count++;
      }
    }
    if (count > maxcount) {
      maxcount = count;
      maxp = p;
    }
  }
}


let output = Number(maxp);

if (testMode) {
  if (output !== 13) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
