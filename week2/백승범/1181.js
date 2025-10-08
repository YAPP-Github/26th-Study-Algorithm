let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const count = input.splice(0,1).map(Number);

const map = new Map();

input.sort((a,b) => {
  if(a.length === b.length) {
    return a.localeCompare(b)
  } else if(a.length > b.length ) {
    return 1
  } else {
    return -1
  }
});

input.forEach(val => {
  if(!map.has(val)) {
    map.set(val, true);
  }
})


map.forEach((_,val) => console.log(val))