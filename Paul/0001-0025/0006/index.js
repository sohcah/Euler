const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');
let n = Number(input);



let SumOfSquares = n*(2*n+1)*(n+1)/6;
let SquareOfSum = n*n*(n+1)*(n+1)/4;

let output = SquareOfSum - SumOfSquares;

if(testMode) {
  if(output !== 2640) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);