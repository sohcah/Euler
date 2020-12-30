const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');
let n = Number(input);
let max = n*100;

let sieve = new Set();
sieve.add(2);
let addon = 0;
for (let i=3;i<=max;i+=2) {sieve.add(i)};


let primes = [];
primes.push(2);

i=3;
while (primes.length<n) {
  if (sieve.has(i)) {
    addon = 2*i;
    for (let j=i;j<=max;j += addon) {
      sieve.delete(j);
    }
    primes.push(i);
  }
  i +=2;
}

let output = primes[n-1];


if(testMode) {
  if(output !== 13) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);