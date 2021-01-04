const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let a = 0;
let num = 1;
let den = 1;
for (b=1;b<10;b++) {
  for (c=1;c<10;c++) {
    a = b*c/(10*b-9*c);
    if (a == Math.floor(a) && a<c && a>0) {
      num *= a;
      den *= c;
      console.log(a + "" + b + "/" + b + "" + c);
    };
    a = 10*b*c/(b+9*c);
    if (a == Math.floor(a) && a<c && a>0) {
      num *= a;
      den *= c;
      console.log(b + "" + a + "/" + c + "" + b);
    };
  }
}

for (i=2;i<num;i++) {
  while (num % i == 0 && den % i == 0) {
    num /= i;
    den /= i;
  }
}

let output = den;

if (testMode) {
  if (output !== 12) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
