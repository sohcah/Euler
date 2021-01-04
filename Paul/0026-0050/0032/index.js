const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

let products = new Set();
let remaining = [1,2,3,4,5,6,7,8,9];

console.log(remaining);
for (let a = 0;a<9;a++) {
  let arem = remaining.splice(a,1)[0];
  for (let b = 0;b<8;b++) {
    let brem = remaining.splice(b,1)[0];
    for (let c = 0;c<7;c++) {
      let crem = remaining.splice(c,1)[0];
      for (let d = 0;d<6;d++) {
        let drem = remaining.splice(d,1)[0];
        for (let e = 0;e<5;e++) {
          let erem = remaining.splice(e,1)[0];
            ans14 = arem*(1000*brem+100*crem+10*drem+erem);
            ans23 = (10*arem+brem)*(100*crem+10*drem+erem);
            if (ans14<10000) {
              let str = ans14.toString(10);
              let works = true;
              for (f = 0;f<4;f++) {
                if (!str.includes(remaining[f])) {works = false}
              }
              if (works == true) {
                console.log(arem + " x " + brem + "" + crem + "" + drem +"" + erem +" = " + ans14);
                products.add(ans14);
              }
            }
            if (ans23<10000) {
              let str = ans23.toString(10);
              let works = true;
              for (f = 0;f<4;f++) {
                if (!str.includes(remaining[f])) {works = false}
              }
              if (works == true) {
                console.log(arem + "" + brem + " x " + crem + "" + drem +"" + erem +" = " + ans23);
                products.add(ans23);
              }
            }
            remaining.splice(e,0,erem);
        }
        remaining.splice(d,0,drem);
      }
      remaining.splice(c,0,crem);
    }
    remaining.splice(b,0,brem);
  }
  remaining.splice(a,0,arem);
}

let sum = 0;
for (let i of products) {sum += i};

let output = sum;

if (testMode) {
  if (output !== 12) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
