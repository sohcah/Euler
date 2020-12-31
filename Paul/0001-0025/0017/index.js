const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

let max = Number(input);

let units = [0,3,3,5,4,4,3,5,5,4];
let teens = [3,6,6,8,8,7,7,9,8,8];
let tens = [0,0,6,6,5,5,5,7,6,6];
let count = 0;
let total = 0;

for (i = 1;i<=max;i++) {
  count = 0;
  if (i % 100 <20 && i % 100 > 9) { //teens!
    count = teens[i % 100 - 10]
  }
  else {
    count = units[i % 10]; //units
    count += tens[Math.floor(i/10) % 10] //tens
  }
  if (i % 100 != 0 && i > 99) {count +=3} //"and"
  if (Math.floor(i/100) % 10 > 0) {
    count += 7; //"hundred"
    count += units[Math.floor(i/100) % 10];
  }
  if (i>999) {
    count += 8; //thousand
    count += units[Math.floor(i/1000)]
  }
  total += count;
}

let output = total;

if(testMode) {
  if(output !== 112) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);