const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

const max = Number(input);
sumofpropdivs = [0,0]; //for 0 and 1
let sum = 1;
let sqrt =1;
let sumofamics = 0;

for (let i=2;i<max;i++) {
  sum = 1;
  sqrt = Math.sqrt(i);
  for (j=2;j<sqrt;j++) {
    if (i%j==0) {
      sum+=j;
      sum+=i/j;
    }
  }
  if (Math.floor(sqrt) == sqrt) {
    sum+=sqrt;
  }
  sumofpropdivs.push(sum);
  if (sum<i) {
    if (sumofpropdivs[sum] == i) {
      sumofamics += sum;
      sumofamics += i;
    }
  }
}

let output = sumofamics;

if(testMode) {
  if(output !== 504) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);