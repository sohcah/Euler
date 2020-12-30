const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split("\n");
let n = Number(input[0]);
let data = input.slice(1).join("").split("").map(i=>Number(i));

let prod = 1;
for (let i = 0;i<n;i++) {prod *=data[i]}
let maxprod = prod;

for (i = n;i<data.length;i++) {
  if (data[i]==0) {
    while (data.indexOf(0,i+1)-i <= n && i<data.length-n) {i = data.indexOf(0,i+1)};
    
    prod = 1;
    for (let j = 1;j<=n;j++) {
      prod *=data[i+j];
    }
    i += n;
  }
  else {
    prod /= data[i-n];
    prod *= data[i];
  }
  if (prod>maxprod) {
    maxprod = prod;
  }
}

let output = maxprod;
if(testMode) {
  if(output !== 5832) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);