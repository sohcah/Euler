const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split("\n");
const seeds = input[0].split(",");
const max = input[1];

output = 0;
let a = Number(seeds[0]);
let b = Number(seeds[1]);
let temp = 0;
while (a<=max) {
  if (a % 2 == 0) {output += a};
  temp = b;
  b = a+b;
  a = temp;
}

if(testMode) {
  if(output !== 44) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);