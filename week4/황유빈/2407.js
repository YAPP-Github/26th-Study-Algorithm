const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week4/황유빈/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const [n, m] = input;

function getCombination(n, m) {
  let boonja =1n;
  for(let i=0n; i<m;i++){
    boonja = boonja * (n -i)
  }

  let boonmo =1n
  for(let i=1n; i<=m; i++){
    boonmo = boonmo * i
  }

  return boonja/boonmo
}

console.log(getCombination(n, m).toString());
