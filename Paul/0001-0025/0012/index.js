const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

const n = input;

let tri = 1;
let add = 2;
let factors = 0;
let i = 0;

while (factors<=n) {
  tri += add;
  add++;
  factors = 0;
  for (i=1;i<Math.sqrt(tri);i++) {
    if (tri % i == 0) {factors ++}
  }
  factors *=2;
  if (i+1==Math.sqrt(tri)) {factors ++}
}

let output = tri; 

if(testMode) {
  if(output !== 28) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);