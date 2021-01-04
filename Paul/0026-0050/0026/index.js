const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const max = Number(input);
let notodiv = 10;
let rems = [];
let maxrec = 0;
let rec = 0;
let output = 0;

for (i = 3; i < max; i++) {
  rems = [];
  notodiv = 10;
  while (!rems.includes(notodiv % i)) {
    notodiv = notodiv % i;
    rems.push(notodiv);
    notodiv *= 10;
  }
  rems.push(notodiv % i);
  rec = rems.length - rems.indexOf(rems[rems.length-1])-1;
  if (rec > maxrec && rems[rems.length-1] !=0) {
    output = i;
    //console.log(i,rec);
    maxrec = rec;
  };
}

if (testMode) {
  if (output !== 7) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
