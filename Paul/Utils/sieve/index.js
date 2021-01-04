let max = 1000000;

let sieve = new Set();
sieve.add(2);
let addon = 0;
for (let i=3;i<=max;i+=2) {sieve.add(i)};

i=3;
while (i<Math.sqrt(max)) {
  if (sieve.has(i)) {
    addon = 2*i;
    for (let j=i+addon;j<=max;j += addon) {
      sieve.delete(j);
    }
  }
  i +=2;
}