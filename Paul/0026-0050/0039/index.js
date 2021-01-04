const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let max = Number(input);
let counts = [];
for(let i = 0;i<=max;i++) {
  counts.push(0);
}

let maxcount = 0;
let nofmax = 0;
let c = 0;
for (let a=1;a<max/3;a++) {
  for (let b=a+1;b<max/2;b++) {
    c = Math.sqrt(a*a+b*b);
    if (c == Math.floor(c)) {
      counts[a+b+c] ++;
      if (counts[a+b+c]>maxcount) {
        maxcount=counts[a+b+c];
        nofmax = a+b+c;
      }
    }
  }
}
console.log(nofmax,maxcount);

let output = nofmax;

if (testMode) {
  if (output !== 120) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
