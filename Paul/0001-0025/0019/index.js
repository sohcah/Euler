const testMode = process.argv.includes('test');
const fs = require('fs');
const input = fs.readFileSync(testMode ? 'test.txt' : 'input.txt', 'utf8');

const daysinmonth = [31,28,31,30,31,30,31,31,30,31,30,31];
const daysofweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let sundaysonfirst = [];
let sundaysonfirstifleap =[];

function isleap(yr) {
  if (yr % 100 == 0) {
    if (yr % 400 == 0) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    if (yr % 4 == 0) {
      return true;
    }
    else {
      return false;
    }
  }
}

let count = 0;
let countleap = 0;
for (let i=0;i<7;i++) { //work out how many Sundays fall on first of month if first day of year is Sun, Mon, ...
  count = 0;
  countleap = 0;
  if (i==0) {
    count = 1;
    countleap = 1;
  };
  let k=i;
  let kleap = i;
  for(let j=0;j<11;j++) {
    k += j;
    kleap +=j;
    if (j == 1) {kleap++}; //leapday added
    if (k % 7 == 0) {count ++};
    if (kleap % 7 == 0) {countleap ++};
  }
  sundaysonfirst.push(count);
  sundaysonfirstifleap.push(countleap);
}


let dayonfirstjan=2; //seed here is year 1901
let output = 0; // no Sundays on 1st of month in 1901!

for (let year = 1902;year<=2000;year++) {
  if (isleap(year-1)) {
    dayonfirstjan = (dayonfirstjan + 366) % 7;
  }
  else {
    dayonfirstjan = (dayonfirstjan + 365) % 7;
  }
  if (isleap(year)) {
    output += sundaysonfirstifleap[dayonfirstjan];
  }
  else {
    output += sundaysonfirst[dayonfirstjan];
  }
}

if(testMode) {
  if(output !== 23) {
    console.error('\x1b[31mTest Failed - Incorrect Output')
  } else {
    console.log('\x1b[32mTest Succeeded - Correct Output')
  };
}

console.log(output);