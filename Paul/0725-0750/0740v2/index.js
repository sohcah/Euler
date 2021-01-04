const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const n = Number(input);

function prob(psofar, pickno) {
  //pickno runs from 0!
  //console.log(psofar,pickno);
  let denom = 2 * n - pickno - noremaining[cantbe[pickno]];
  if (pickno == 2 * n - 1) {
    if (noremaining[n-1] == 1) {
      console.log(psofar);
      output += psofar;
    }
  } else {
    for (let i = 0; i < n; i++) {
      if (i != cantbe[pickno] && noremaining[i] > 0) {
        noremaining[i]--;
        prob(psofar * (noremaining[i]+1) / denom, pickno + 1);
        noremaining[i]++;
      }
    }
  }
  return output;
}

let noremaining = [];
for (let i = 0; i < n; i++) {
  noremaining.push(2);
} // 2 zeroes, 2 ones, 2 twos etc remain!

let cantbe = [];
for (let i = 0; i < n; i++) {
  cantbe.push(i);
}
for (let i = 0; i < n; i++) {
  cantbe.push(i);
}


let output = 0;
console.log(noremaining, cantbe);
console.log(prob(1, 0));


if (testMode) {
  if (output !== 0.3611111111) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
