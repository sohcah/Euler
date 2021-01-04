const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const amount = Number(input);
const coins = [200, 100, 50, 20, 10, 5, 2, 1];

function waystomake(n, biggest) {
  let i = 0;
  while (coins[i] > biggest) {
    i++;
  }
  let ways = 0;
  let j = 0;
  while (n - j * biggest >= 0) {
    if (n - j * biggest == 0) {
      ways++;
    } else {
      if (coins[i + 1] == 1) {
        ways++;
      } else {
        ways += waystomake(n - j * biggest, coins[i + 1]);
      }
    }
    j++;
  }
  return ways;
}

let output = waystomake(amount, coins.find(i=>i<=amount));

if (testMode) {
  if (output !== 12) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
