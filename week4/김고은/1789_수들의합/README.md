
[# 문제링크](https://www.acmicpc.net/problem/1789)

## 접근 방향 설명
> `1) 서로 다른 자연수`를 `2) 가장 많이 써서` 더하여 N을 만드면 되는 문제 
> 무조건 작은 수부터 순회해면서 반복문을 빠져나오는 식으로 구현했다.
> 정확하게 S를 만들어야했기 때문에, sum 이 N을 초과하는 경우 숫자를 하나 빼줌으로써 분기처리했다

```js
if(sum > N) console.log(idx -1)
else console.log(idx)
```

## 풀이 과정에서 새롭게 느낀점(배운점)

- 딱히 문제없이 해결!
---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const S = Number(fs.readFileSync(filePath).toString().trim());

let sum = 0;
let idx = 1;

while(1) {
    sum += idx;
    if(sum >= S) break;
    idx++;
}

if(sum > S) console.log(idx -1)
else console.log(idx)
```

---

## 문제
서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?

## 입력
첫째 줄에 자연수 S(1 ≤ S ≤ 4,294,967,295)가 주어진다.

## 출력
첫째 줄에 자연수 N의 최댓값을 출력한다.