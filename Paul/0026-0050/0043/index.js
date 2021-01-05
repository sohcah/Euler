const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs.readFileSync(testMode ? "test.txt" : "input.txt", "utf8");

const primes = [17, 13, 11, 7, 5, 3, 2];

let rem = new Set();

function prefix(depth) {
  
  if ((depth == 7)) {    
      //console.log("answer:" + [...rem][0] + digsofar);
      sum += Number([...rem][0] + digsofar);    
  } else {
    let pmult = primes[depth];
    
    //console.log(depth,digsofar,rem,pmult);
    
    while (pmult < 1000) {
      if (
        pmult % 100 == Number(digsofar.slice(0, 2)) &&
        rem.has(Math.floor(pmult / 100))
      ) {
        digsofar = Math.floor(pmult / 100) + digsofar;
        rem.delete(Math.floor(pmult / 100));
        prefix(depth + 1);
        rem.add(Math.floor(pmult / 100));
        digsofar = digsofar.slice(1);
      }
      pmult += primes[depth];
      //console.log(pmult);
    }
  }
}

let i = primes[0];
let digsofar = "";
let sum = 0;

while (i < 1000) {
    rem = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    digsofar = i.toString(10);
    if (digsofar.length<3) {digsofar = "0" + digsofar};
    for (j = 0; j < 3; j++) {
      rem.delete(Number(digsofar[j]));
    }
    if (rem.size == 7) {
      prefix(1);
    }
  i += primes[0];
}

let output = sum;

if (testMode) {
  if (output !== 2) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
