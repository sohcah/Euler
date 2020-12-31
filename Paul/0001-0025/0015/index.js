const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split(",").map(i=>Number(i));

let width = Math.max(input[0],input[1]);
let height = Math.min(input[0],input[1]);

let output = 1;
for (i=1;i<=height;i++) {
  output *=i+width;
  output /=i;
}


if(testMode) {
  if(output !== 6) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);