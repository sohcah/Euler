const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split('\n');
const multiples = input[0].split(',').map(Number);
const max = Number(input[1]);

console.log(multiples, max);

let output = 0;

for(let n = 1;n < max;n++) {
  let isMultiple = false;
  for(const multiple of multiples) {
    isMultiple ||= n % multiple === 0;
  }
  if(isMultiple) output += n;
}

if(testMode) {
  if(output !== 23) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);