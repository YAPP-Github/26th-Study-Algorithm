
[# 문제링크](https://www.acmicpc.net/problem/2751)

## 접근 방향 설명
> 중복을 제외하기 위해, Set 객체를 통해 값을 정제해준 후 단순 정렬을 해준다.


## 풀이 과정에서 새롭게 느낀점(배운점)

- 중복되지 않는 값들의 집합을 저장하는 자료구조 -> 오랜만에 Set 으로 정제하니 나름 간편해서 자주 사용하게 될 거 같다. 

[MDN set 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)


---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const _ = input.splice(0,1);
const set_arr = new Set([...input]);

const ans = Array.from(set_arr).sort((a,b) => a-b)

console.log(ans.join("\n"));
```

---

## 문제
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

## 입력
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

## 출력
첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.