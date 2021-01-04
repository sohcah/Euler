const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8').split(",");

let digits = input[0].split("");
let itemno = input[1]-1;


let output = "";
while (digits.length>1) {
  fact = 1;
  for(i=1;i<digits.length;i++) {
    fact *=i;
  }
  let nextdig = digits[Math.floor(itemno/fact)];
  output += nextdig;
  digits = digits.filter(i=>i!=nextdig);
  itemno -= Math.floor(itemno/fact)*fact;
}
output += digits[0];


if(testMode) {
  if(output !== "42310") {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);