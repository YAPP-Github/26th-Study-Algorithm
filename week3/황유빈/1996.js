const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week3/황유빈/input.txt")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0]); // 테스트케이스 개수
let line = 1;
let answer=[]

for (let t = 0; t < T; t++) {
  const [_N, M] = input[line++].split(" ").map(Number);
  const priorities = input[line++].split(" ").map(Number);

  const arr = priorities.map((value,index)=>({value,index}))
  let count=0

  while(arr.length){
    const current = arr.shift()
    if(arr.some(item=>item.value > current.value)){
      arr.push(current)
      continue
    }
    count++
    if(current.index === M){
      answer.push(count)
      break;
    }
  }
}
console.log(answer.join("\n"));






