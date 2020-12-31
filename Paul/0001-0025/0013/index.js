const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split("\n").map(i=>Number(i.slice(0,13)));

let sum = 0;

for (let i of input) {sum += i};

let output = sum.toString(10).slice(0,10);

if(testMode) {
  if(output !== 28) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);