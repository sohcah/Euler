const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let max = 10000;

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

let primes4dig = [...sieve].filter((x) => x > 999);

let samedig = [];
let str;
for (const p of primes4dig) {
  str = p.toString().split("").sort().join("");
  if (!samedig.some((i) => i[0] == str)) {
    samedig.push([str, p]);
  } else {
    samedig[samedig.findIndex((i) => i[0] == str)].push(p);
  }
}

let solutions =[];

for (const s of samedig) {
  if (s.length > 3) {
    for (i = 1; i < s.length - 2; i++) {
      for (j = i + 1; j < s.length - 1; j++) {
        if (s.includes(2*s[j]-s[i])) {solutions.push(s[i]+""+ s[j]+ "" + (2*s[j]-s[i]))}
      }
    }
  }
}
console.log(solutions);


let output = solutions[0];

if (testMode) {
  if (output !== "148748178147") {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
