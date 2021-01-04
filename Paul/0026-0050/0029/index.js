const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs
  .readFileSync(testMode ? "test.txt" : "input.txt", "utf8")
  .match(/([0-9]+)/g)
  .map((i) => Number(i));

let powersofn = [];
let n = [];

for (let i = 2; i <= input[1]; i++) {
  if (!powersofn.includes(i)) {
    let j = i;
    while (j <= input[1]) {
      powersofn.push(j);
      n.push(i);
      j *= i;
    }
  }
}


let ans = (input[1] - input[0] + 1) * (input[3] - input[2] + 1);

let power = 1;
for (let i = 1; i < powersofn.length; i++) {
  if (n[i] == n[i - 1]) {
    power++;
    
    for (let b = input[2]; b <= input[3]; b++) {
      copy = false;
      for (j = 1; j < power; j++) {
        if (
          (b * power) / j == Math.floor((b * power) / j) &&
          (b * power) / j >= input[2] &&
          (b * power) / j <= input[3]
        ) {
          copy = true;
        }
      }
      if (copy == true) {ans--};

      //ans -= Math.floor(input[3]/power*j)-prev*j;
      //prev = Math.floor(input[3]/power*j);
    }
  } else {
    power = 1;
  }
}

let output = ans;

// let ansset = new Set();
// for (a = input[0]; a <= input[1]; a++) {
//   for (b = input[2]; b <= input[3]; b++) {
//     ansset.add(Math.pow(a, b));
//   }
// }

// console.log(ansset, ansset.size);

if (testMode) {
  if (output !== 15) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
