const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

let power = Number(input);

let arr = [1];
let ans = 0;
let carry = 0;

for (let i=0;i<power;i++) {
  carry = 0;
  for (let j=0;j<arr.length;j++) {
    ans = arr[j]*2+carry;
    carry = 0;
    if (ans>=10000000000) {
      ans -= 10000000000;
      carry = 1;
    }
    arr[j] = ans;
  }
  if (carry == 1) {arr.push(1)};
  //console.log(arr);
}

let digits = arr.map(i=>i.toString(10)).join("").split("").map(i=>Number(i));

let sum = 0;
for (let i=0;i<digits.length;i++) {sum += digits[i]};

let output = sum;

if(testMode) {
  if(output !== 26) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);