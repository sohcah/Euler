const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

const max = Number(input);

let cannot = new Set;
for (let i = 1;i <= max;i++) {cannot.add(i)};

let sum = 1;
let sqrt =1;
let abundant = [];

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
  
  if (sum>i) { //check if abundant!
    abundant.push(i);
    for (const a of abundant) { //remove all abundant sums involving i
      cannot.delete(a+i);
    }
  }
}

let output = 0;
for (const n of cannot) {
  output += n;
}

if(testMode) {
  if(output !== 276) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);