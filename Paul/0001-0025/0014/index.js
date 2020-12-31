const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

let max = Number(input);
let mult = 100;
let biggestyet = max*mult-1;
let lenOf = [];
let maxlen = 1;
for (let i=0;i<max*mult;i++) {
  lenOf.push(0);
}

for (let j = 0;j<Math.log2(max*mult);j++) {
  lenOf[Math.pow(2,j)] = j+1;
}

let len = 0;
for (let i = 3;i<max;i++) {
  if (lenOf[i] == 0) {
    len = 0;
    let j = i;
    while (lenOf[j] == 0) {
      if (j % 2 == 0) {
        j /=2;
      }
      else {
        j = 3*j+1;
      }
      len++;
    }
    lenOf[i] = lenOf[j]+len;
    if (lenOf[i]>maxlen) {
      maxlen = lenOf[i]
      maxlenfor = i;
    };
  }
  if (i> max - 20) {console.log(i,lenOf[i])};
}

let output = maxlenfor;

if(testMode) {
  if(output !== 9) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);