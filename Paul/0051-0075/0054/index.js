const testMode = process.argv.includes("test");
const fs = require("fs");
const input = fs
  .readFileSync(testMode ? "test.txt" : "input.txt", "utf8")
  .replace(/A/g, "14")
  .replace(/K/g, "13")
  .replace(/Q/g, "12")
  .replace(/J/g, "11")
  .replace(/T/g, "10")
  .replace(/C/g, ",0")
  .replace(/D/g, ",1")
  .replace(/H/g, ",2")
  .replace(/S/g, ",3")
  .split("\n")
  .map((i) => i.split(" ").map((i) => i.split(",").map((i) => Number(i))));

const ref = [
  "High Card",
  "1 Pair",
  "2 Pairs",
  "3 of a Kind",
  "Straight",
  "Flush",
  "Full House",
  "4 of a kind",
  "Straight Flush",
  "Royal Flush",
];

let p1wins = 0;

for (let i = 0; i < input.length; i++) {
  let rankcounts = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let suit = [0, 0];
  let flush = [true, true];
  let straight = [false, false];
  let handtype = ["", ""];
  let score = [0, 0];
  for (let k = 0; k < 2; k++) {
    for (let j = 0; j < 5; j++) {
      if (j == 0) {
        suit[k] = input[i][k * 5 + j][1];
      } else {
        if (suit[k] != input[i][k * 5 + j][1]) {
          flush[k] = false;
        }
      }
      rankcounts[k][input[i][k * 5 + j][0]]++;
    }
    if (rankcounts[k].join("").includes("11111")) {
      straight[k] = true;
    }
    handtype[k] = rankcounts[k]
      .slice()
      .sort((a, b) => b - a)
      .slice(0, 5)
      .join("");
    if (straight[k] && flush[k]) {
      //Straight Flush
      score[k] = 8;
      if (rankcounts.join("").slice(10) == "11111") {
        score[k] = 9;
      } //Royal Flush
    }
    if (handtype[k] == "41000") {
      score[k] = 7;
    } //4 of a Kind
    if (handtype[k] == "32000") {
      score[k] = 6;
    } //Full House
    if (!straight[k] && flush[k]) {
      score[k] = 5;
    }
    if (straight[k] && !flush[k]) {
      score[k] = 4;
    }
    if (handtype[k] == "31100") {
      score[k] = 3;
    } //3 of a Kind
    if (handtype[k] == "22100") {
      score[k] = 2;
    } //2 Pairs
    if (handtype[k] == "21110") {
      score[k] = 1;
    } //1Pair
  }
  //console.log(input[i],rankcounts,handtype,flush,straight,score);
  if (score[0] == score[1]) {
    //console.log(i + 1);
    let n = 0;
    let high0=14;
    let high1 = 14;
    while (high0 == high1) { //this could fail on "22100" type hands!!!
      high0 = rankcounts[0].lastIndexOf(Number(handtype[0][n]));
      high1 = rankcounts[1].lastIndexOf(Number(handtype[1][n]));
      if (high0 == high1) {
        console.log(i + 1, rankcounts, handtype, high0, high1);
      }
      n++;
    }
    if (high0>high1) {p1wins++};
  }
  if (score[0] > score[1]) {
    p1wins++;
  }
}

let output = p1wins;

if (testMode) {
  if (output !== 2) {
    console.error("\x1b[31mTest Failed - Incorrect Output");
  } else {
    console.log("\x1b[32mTest Succeeded - Correct Output");
  }
}

console.log(output);
