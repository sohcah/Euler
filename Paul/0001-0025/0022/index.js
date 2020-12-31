const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').replace(/\"/g,"").split(",");

input.sort();
let score = 0;
let output = 0;

for (let i=0;i<input.length;i++) {
  score = 0;
  for (let j=0;j<input[i].length;j++) {
    score += input[i].charCodeAt(j)-64;
  }
  output += score * (i+1);
}


if(testMode) {
  if(output !== 77) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);