
[# 문제링크](https://www.acmicpc.net/problem/2407)

## 접근 방향 설명
> nCm 에 대해서 `N! / M!(N - M)!` 구현하는 되는 문제였다 
> 다만, 중요한점이 N과 M의 범위인데 100! 일때 `9.33262154439e+157` 로 매우 컴 
> JS 의 기본 숫자형 Number는 64비트 부동소수점 형식 -> `2^53 - 1` 까지 정확한 표현 가능 -> 정확한 정수가 아니라 “근사 실수값”으로 저장됨

따라서 BigInt를 이용해서, 크기에 제한 없이 정수 표현 해야함! 

## 풀이 과정에서 새롭게 느낀점(배운점)

- 연산하고 난 결과값이 무척 커질 것 같으면 `2^53 - 1`가 커질거 같으면 자료형을 고쳐보자 
- `BigInt`  

[BigInt MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, M ] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let n1 = 1n; // bigint 사용하기

for(let i = N; i > N-M; i--){
    n1 =  n1 * BigInt(i) / BigInt(N - i + 1)
}

console.log(n1.toString())
```

---

## 문제
숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다. 두 숫자 카드에 같은 수가 적혀있는 경우는 없다.

셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 넷째 줄에는 상근이가 가지고 있는 숫자 카드인지 아닌지를 구해야 할 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다

## 출력
첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 가지고 있으면 1을, 아니면 0을 공백으로 구분해 출력한다.

