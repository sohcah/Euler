const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let pands = new Set();

for (i=9234;i<=9476;i++) { //4 digit seed
  let dig9 = i + "" + i*2;
  if (dig9.split("").sort().join("") == "123456789") {
    pands.add(Number(dig9));
  }
}

for (i=91;i<=98;i++) {  //2 digit seed (3 digit seeds would give too small results)
  let dig9 = i + "" + i*2 + "" + i*3 + "" + i*4;
  if (dig9.split("").sort().join("") == "123456789") {
    pands.add(Number(dig9));
  }
}

pands.add(918273645); // the only 1 digit seeded one!

console.log(pands);

let output = Math.max(...pands);

if (testMode) {
  if (output !== 13) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
