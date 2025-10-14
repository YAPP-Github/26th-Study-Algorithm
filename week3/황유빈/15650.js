const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week3/황유빈/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

  const [N,M]=input
  const pick=[]
  const out=[]
  function dfs(start){
    if(pick.length ===M){
      out.push(pick.join(' '))
      return;
    }
    for(let num =start; num < N+1; num++){
      pick.push(num)
      dfs(num+1)
      pick.pop()
    }

  }

  dfs(1)
  console.log(out.join('\n'))