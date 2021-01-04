const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

const size = Number(input);
const n = (size-1)/2;

let output = 1;
let addon = 2;
let current = 1;

for (let i=0;i<n;i++) {
  for (let j=0;j<4;j++) {
    current += addon;
    output += current;
  }
  addon +=2;
}



if(testMode) {
  if(output !== 101) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);