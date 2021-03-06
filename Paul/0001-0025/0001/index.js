const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split("\n");
const multiples = input[0].split(",");
const lessthan = input[1];

let output = 0;
let mult = false;

for (let i = 1;i<lessthan;i++) {
  mult = false;
  for (const m of multiples) {
    if (i % m == 0) {
      mult = true
    }
  }
  if (mult == true) {output += i}
}

if(testMode) {
  if(output !== 37) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);