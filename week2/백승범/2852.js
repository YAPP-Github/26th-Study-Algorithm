let fs = require("fs");
const { resourceUsage } = require("process");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//console.log(input);

const count = Number(input.splice(0,1)[0]);


input.forEach((_,index) => {
  input[index] = input[index].split(" ");
})

const stack = [];

//console.log(count, input);

let totalOne = 0;
let totalTwo = 0;


for(let i =0; i< count; i++) {
  if(stack.length === 0) {
    stack.push(input[i]);
  } else if (stack[stack.length - 1][0] === input[i][0] ) {
    stack.push(input[i]);
  } else if (stack.length === 1 && stack[stack.length - 1][0] !== input[i][0] ) {
    const [tempH, tempM] = stack.pop()[1].split(":").map(Number);
    const [nowH, nowM] = input[i][1].split(":").map(Number);

    const total = nowH * 60 + nowM - tempH * 60 - tempM;
    
    if(input[i][0] === '2') {
      totalOne += total;
    } else {
      totalTwo += total;
    }
  } else {
    stack.pop()
  }
}

if(stack.length !== 0) {
  let stack1, stack2;
  while(stack.length !== 0) {
    [stack1, stack2] = stack.pop();
  }


  const [tempH, tempM] = stack2.split(":").map(Number);

  const total = 48 * 60  - tempH * 60 - tempM;

  if(stack1 === '1') {
    totalOne += total;
  } else {
    totalTwo += total;
  }
}

//console.log(totalOne, totalTwo);

let resultOne = [];
let resultTwo = [];

resultOne.push(String(Math.floor(totalOne / 60)).padStart(2, '0'));
resultOne.push(String(Math.floor(totalOne % 60)).padStart(2, '0'));

resultTwo.push(String(Math.floor(totalTwo / 60)).padStart(2, '0'));
resultTwo.push(String(Math.floor(totalTwo % 60)).padStart(2, '0'));


console.log(resultOne.join(":"));

console.log(resultTwo.join(":"));
