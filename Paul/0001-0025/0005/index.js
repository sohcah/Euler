const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');
let max = Number(input);

let nums = [];
let output = 1;

for (let i = 2;i<=max;i++) {nums.push(i)};

for (let j = 0;j<nums.length;j++) {
  output *= nums[j];
  for (k=j+1;k<nums.length;k++) {
    if (nums[k] % nums[j] == 0) {nums[k] /= nums[j]};
  }
  nums[j]=1;
}

if(testMode) {
  if(output !== 2520) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);