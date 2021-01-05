const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const max = Number(input);

let count = 0;

function strsum (a,b) {
  while (a.length<b.length) {a = "0" + a};
  while (b.length<a.length) {b = "0" + b};
  let ans = "";
  let carry = 0;
  for (i=1;i<=a.length;i++) {
    ans = (Number(a[a.length-i])+Number(b[b.length-i])+carry).toString() + ans;
    carry = 0;
    if (ans.length>i) {
      carry = 1;
      ans = ans.slice(1);
    }
  }
  if (carry == 1) {ans = "1"+ans}
  return ans;
}

for (let i = 1;i<max;i++) {
  let s = i.toString();
  palin = false;
  for (let j = 0;j<50;j++) {
    s = strsum(s,s.split("").reverse().join(""));
    if (s == s.split("").reverse().join("")) {
      palin = true;
      j=50;
    }
  }
  if (palin == false) {
    console.log(i);
    count++;
  }

}

let output = count;

if (testMode) {
  if (output !== 1) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
