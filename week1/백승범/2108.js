let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input = input.splice(1);

input.sort((a,b) => (a-b));
const count = input.length;

let eva = 0;

input.map((num) => eva = eva + num);

eva = Math.round(eva/count);

eva === 0 ? eva = 0 : eva;

console.log(eva);

let mid = 0;

mid = input[Math.floor(count/2)];

console.log(mid)

let often = 0;

const map1 = new Map();

input.forEach((num) => {
  if(map1.has(num)) {
    map1.set(num, map1.get(num) + 1);
  } else {
    map1.set(num,1);
  }
});

const maxValue = Math.max(...map1.values());

const mapArr = [...map1.entries()];

const tempStack = [];

mapArr.forEach((arr) => {
  if(arr[1] === maxValue) {
    tempStack.push(arr)
  }
})

if(tempStack.length === 1) {
  often = tempStack[0][0];
} else {
  often = tempStack[1][0];
}

console.log(often)

const range = input[input.length -1] - input[0];

console.log(range);