let fs = require("fs");
const { resourceUsage } = require("process");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//console.log(input);

const map = new Map();

const [count, maxVal] = input.splice(0,1)[0].split(" ").map(Number);

const arr = input[0].split(" ").map(Number);


arr.forEach(val => {
  if(map.has(val)) {
    map.set(val,map.get(val) + 1)
  } else {
    map.set(val, 1);
  }
})


const resultArr = [...map];

resultArr.sort((a,b) =>  b[1] - a[1]);

let result = '';

resultArr.forEach(val => {
  for(let i=0; i< val[1]; i++) {
    result += val[0] + ' ';
  }
})

console.log(result);

