const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8").split("-");

const min = Number(input[0]);
const max = Number(input[1]);

let H = 1;
let inv = 1;

//note that EVERY hexagonal number is a triangle number so no need to check that (Hn = T2n-1)

for (n=min;n<max;n++) {
  H = n*(2*n-1);
  inv = (Math.sqrt(24*H+1)+1)/6;
  if (inv == Math.floor(inv)) {
    console.log(2*n-1,inv,n,H);
    output = H;
    n= max;
  }
}


if (testMode) {
  if (output !== 40755) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
