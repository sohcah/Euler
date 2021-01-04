const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').match(/(-?[0-9]+)/g).map(i=>Number(i));


let sieve = new Set();
sieve.add(2);
let addon = 0;
for (let i=3;i<=1000000;i+=2) {sieve.add(i)};



i=3;
while (i<1000) {
  if (sieve.has(i)) {
    addon = 2*i;
    for (let j=i+addon;j<=1000000;j += addon) {
      sieve.delete(j);
    }
  }
  i +=2;
}

let max = 0;
for (let a = input[0];a<=input[1];a++) {
  for (let b = input[2];b<=input[3];b++) {
    let n = 0;
    while (sieve.has(n*n+a*n+b)) {n++};
    if (n>max) {
      max = n;
      //console.log(a,b,n);
      output = a*b;
    }
  }
}

if(testMode) {
  if(output !== 41) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);