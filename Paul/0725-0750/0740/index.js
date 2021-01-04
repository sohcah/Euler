const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs
  .readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const n=Number(input);

const from = [];
for (let i=0;i<n;i++) {
  from.push(i);
  from.push(i);
}

let rem = new Array(...from);

fact = 1;
factarr = [1];
for (let i=1;i<=2*n;i++) {
  fact *=i;
  factarr.push(fact);
};
console.log(factarr,rem);

let valid = true;
let works = true;
let wcount = 0;
let vcount = 0;
let temp = 0;

for (let i=0;i<fact;i++) {
  rem = new Array(...from);
  works = true;
  valid = true;
  let k = i;
  let res = [];
  for (j = 2*n-1;j>0;j--) {
    temp = Math.floor(k/factarr[j]);
    res.push(rem[temp]);
    if (rem[temp]==from[res.length-1]) {
      if (j>1) {valid = false};
      works = false;
    }
    //console.log(rem[temp],res.length-1,from[res.length-1]);
    rem.splice(temp,1);
    k -= temp*factarr[j];
    
  }
  res.push(rem[0]);
  if (rem[0] == from[from.length-1]) {works = false};
  if (valid == true) {
    vcount++;
    if (works == true) {wcount++};
  }
  
  console.log(i,res,valid,works);
}

console.log(vcount,wcount);
let output = 0;

if (testMode) {
  if (output !== 0.3611111111) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
