const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split("\n").map(i=>i.split(" ").map(i=>Number(i)));

const width = input[0].length;
const height = input.length;
const n = 2;

console.log(width,height);
let prod = 1;
let maxprod = 1;

for (let i=0;i<height;i++) {
  for (let j=0;j<width;j++) {
    if (j<=width-n) {
      prod = 1;
      for (let k=0;k<n;k++) {
        prod *=input[i][j+k];
      }
      if (prod>maxprod) {maxprod = prod};
    }
    if (i<=height-n) {
      prod = 1;
      for (let k=0;k<n;k++) {
        prod *=input[i+k][j];
      }
      if (prod>maxprod) {maxprod = prod};
    }
    if (j<=width-n && i<=height-n) {
      prod = 1;
      for (let k=0;k<n;k++) {
        prod *=input[i+k][j+k];
      }
      if (prod>maxprod) {maxprod = prod};
    }
    if (j>=n-1 && i<=height-n) {
      prod = 1;
      for (let k=0;k<n;k++) {
        prod *=input[i+k][j-k];
      }
      if (prod>maxprod) {maxprod = prod};
    }
  
  }
}

let output = maxprod; 

if(testMode) {
  if(output !== 17) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);