const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

const max = Number(input);

fact = 1n;
for (i=2;i<=max;i++) {
  fact = fact*BigInt(i);
}

let digitsum =0n;
while (fact>0) {
  digitsum += fact % 10n;
  fact = (fact - (fact % 10n))/10n;
}

let output = digitsum;

if(testMode) {
  if(output !== 27n) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);