let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(String);

const count = Number(input[0]);

input.splice(0,1);

input.forEach((val, index) => {
  const tempArr = val.split(" ");
  input[index] = tempArr;
})


input.sort((a,b) => a[0] - b[0]);

const map1 = new Map();

input.forEach((val) => {
  if(map1.has(val[0])) {
    map1.get(val[0]).push(val[1])
  } else {
    map1.set(val[0], [val[1]]);
  }
})


map1.forEach((val, key) => {
  val.forEach(tempVal => {
    console.log(key, tempVal)
  })
})