const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split("\n");
let tofactor = Number(input[0]);
const max = Math.floor(Math.sqrt(tofactor));

let output = 0;
let sieve = new Set();
sieve.add(2);
let addon = 0;
for (let i=3;i<=max;i+=2) {sieve.add(i)};

while (tofactor % 2 ==0) {tofactor /= 2};

for (i=3;i<=max;i+=2) {
  if (sieve.has(i)) {
    addon = 2*i;
    for (let j=i;j<=max;j += addon) {
      sieve.delete(j);
    }
    if (tofactor % i ==0) {output = i};
    while (tofactor % i ==0) {tofactor /= i};
  }
}

if(testMode) {
  if(output !== 29) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);