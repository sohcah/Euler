const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split("\n").map(i=>i.split(" ").map(i=>Number(i)));

for (let row = 1;row<input.length;row++) {
  input[row][0] += input[row-1][0]; //left end
  input[row][row] += input [row-1][row-1]; //right end
  for (let col = 1;col<row;col++) { //the rest!
    input[row][col] += Math.max(input[row-1][col],input[row-1][col-1]);
  }
}
let output = Math.max(...input[input.length-1]);

if(testMode) {
  if(output !== 23) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);