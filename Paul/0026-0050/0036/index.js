//const testMode = process.argv.includes("test");
//const fs = require("fs");
//const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

//let max = Number(input);

let sum = 0;

for (i=1;i<1000;i++) {
  istr = i.toString(10);
  irev = istr.split("").reverse().join("");
  long = Number(istr + irev);
  short = Number(istr + irev.slice(1));
  if (long.toString(2).split("").reverse().join("") == long.toString(2)) {sum +=long};
  if (short.toString(2).split("").reverse().join("") == short.toString(2)) {sum +=short};
}


let output = sum;

// if (testMode) {
//   if (output !== 13) {
//     console.error("\x1b[31mTest Failed - Incorrect Output");
//   } else {
//     console.log("\x1b[32mTest Succeeded - Correct Output");
//   }
// }

console.log(output);
