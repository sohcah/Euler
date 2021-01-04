const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').replace(/\"/g,"").split(",");

let count = 0;
let score = 0;
let triangles = new Set;

let t = 0;
for (i = 1;i<26*15;i++) {
  t += i;
  triangles.add(t);
}

for (let i=0;i<input.length;i++) {
  score = 0;
  for (let j=0;j<input[i].length;j++) {
    score += input[i].charCodeAt(j)-64;
  }
  if (triangles.has(score)) {count++}
}

let output = count;

if(testMode) {
  if(output !== 2) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);