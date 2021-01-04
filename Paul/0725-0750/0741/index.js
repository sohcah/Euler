const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const n = 8;
let col = [];
let res = [];
let count = 0;
let Tcount = 0;
let Fcount = 0;
let Hcount = 0;
let TIcount = 0;
let FIcount = 0;
let Dcount = 0;
let Xcount = 0;
let Pcount = 0;

function placeinrow(rcur) {
  if (rcur == n - 1) {
    let a = 0;
    while (col[a] == 2) {
      a++;
    }
    res.push(a);
    col[a]++;
    let b = a;
    while (col[b] == 2) {
      b++;
    }
    res.push(b);
    col[b]++;
    if (a != b) {
      let isT = false;
      let isF = false;
      let isD = false;
      let isX = false;
      let isP = false;
      if (
        res.join(",") ==
        res
          .slice()
          .reverse()
          .map((i) => n - 1 - i)
          .join(",")
      ) {
        //console.log(res.join(","));
        Tcount++;
        isT = true;
      }
      let res2 = [];
      let res3 = [];
      let res4 = [];
      let res5 = [];
      let isI = true;
      for (let c = n - 1; c >= 0; c--) {
        let temp = res.indexOf(c);
        let temp2 = res.indexOf(c, temp + 1);
        res2.push(Math.floor(temp / 2));
        res2.push(Math.floor(temp2 / 2));
        res3.unshift(Math.floor(temp2 / 2));
        res3.unshift(Math.floor(temp / 2));
        res4.push(n - 1 - Math.floor(temp2 / 2));
        res4.push(n - 1 - Math.floor(temp / 2));
        if (res[2*c] +res[2*c+1] != n-1) {isI = false};
      }
      if (res.join(",") == res2.join(",")) {
        Fcount++;
        isF = true;
        //console.log(res.join(","));
      }
      if (res.join(",") == res3.join(",")) {
        Dcount++;
        isD = true;
        //console.log(res.join(","));
        if (res.join(",") == res4.join(",")) {
          Xcount++;
          isX = true;
          //console.log(res.join(","));
        }
      }
      let isH = true;
      for (let d = 0; d < n; d++) {
        if (
          res.slice(d * 2, d * 2 + 2).join(",") !=
          res.slice(n * 2 - d * 2 - 2, n * 2 - d * 2).join(",")
        ) {
          isH = false;
        }
      }
      if (isH == true) {
        Hcount++;
        //console.log(res.join(","));
        if (isT == true) {
          TIcount++;
        }
        if (isF == true) {
          FIcount++;
        }
        if (isI == true) {
          Pcount++;
          isP = true;
          console.log(res.join(","));
        }
      }
      //console.log(res.join(","));
      count++;
    }
    res.pop();
    res.pop();
    col[a]--;
    col[b]--;
    return;
  } else {
    for (let a = 0; a < n - 1; a++) {
      while (col[a] == 2) {
        a++;
      }
      if (a < n - 1) {
        for (let b = a + 1; b < n; b++) {
          while (col[b] == 2) {
            b++;
          }
          if (b < n) {
            col[a]++;
            col[b]++;
            res.push(a, b);
            // res.push(b);
            placeinrow(rcur + 1);
            res.pop();
            res.pop();
            col[a]--;
            col[b]--;
          }
        }
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  col.push(0);
}

placeinrow(0);
console.log(Tcount, Fcount, Hcount, TIcount, FIcount, Dcount, Xcount,Pcount);
output = count;

if (testMode) {
  if (output !== 19316) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
