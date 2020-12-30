const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');
let sum = Number(input);

let output = 0;
let c = 0;

for (let a = 1;a<sum/3;a++) {
  for (let b = a+1;b<sum/2;b++) {
    c = Math.sqrt(a*a+b*b);
    if (a + b + c == sum) {
      output = a*b*c;
      a = sum;
      b = sum;
    }
  }
}

if(testMode) {
  if(output !== 60) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);