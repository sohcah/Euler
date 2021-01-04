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

sieve = [...sieve].sort((a,b)=>a-b);

console.log(sieve.length);

let sumlen = 21;
let maxsumlen = 1;
let maxlensum = 2;
let sum = 0;
for (i = 0; i < sumlen; i++) {
  sum += sieve[i];
}

while (sum < max) {
  if (sumlen % 2 == 0) {
    if (sieve.includes(sum)) {
      if (sumlen > maxsumlen) {
        maxsumlen = sumlen;
        maxlensum = sum;
      }
    }
  } else {
    while (sum < max) {
      if (sieve.includes(sum)) {
        if (sumlen > maxsumlen) {
          maxsumlen = sumlen;
          maxlensum = sum;
          sum = max;
          console.log(maxsumlen);
        }
      }
      sum += sieve[i];
      sum -= sieve[i - sumlen];
      i++;
    }
  }
  sumlen++;
  sum = 0;
  for (i = 0; i < sumlen; i++) {
    sum += sieve[i];
  }
}

console.log(maxsumlen, maxlensum,sumlen);

let output = maxlensum;

if (testMode) {
  if (output !== 41) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
