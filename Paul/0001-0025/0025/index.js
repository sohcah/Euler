const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

digits = Number(input);

let a = 1n;
let b = 1n;
let temp = 1n;
let term = 2;

while (b.toString(10).length<digits) {
  temp = b;
  b +=a;
  a = temp;
  term++;
}

let output = term;

if(testMode) {
  if(output !== 12) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);