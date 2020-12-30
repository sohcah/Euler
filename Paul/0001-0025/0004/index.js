const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');
let digits = Number(input);


let max = 0;
let str = "";
let palin = true;
for(let i=Math.pow(10,digits)-1;i>=Math.pow(10,digits-1);i--) {
  for(let j=i;j>=Math.pow(10,digits-1);j--) {
    str = (i*j).toString();
    palin = true;
    for (let k=0;k<digits;k++) {
      if (str.slice(k,k+1) != str.slice(str.length-1-k,str.length-k)) {
        palin = false;
      }
    }
    if (palin == true) {
      max = Math.max(max,i*j);
    }
  }
}

let output = max;

if(testMode) {
  if(output !== 9009) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);