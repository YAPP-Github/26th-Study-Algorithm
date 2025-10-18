
[# 문제링크](https://www.acmicpc.net/problem/11727)

## 접근 방향 설명
> 앗 보자마자 dp다 생각 났던 문제 
> 점화식 `dp[i] = ( dp[i-1] + dp[i-2] *2 )`
> 1. dp[i-1]에서 오른쪽 끝에 2×1 타일을 세로 붙이기 
> 2. dp[i-2]에서 오른쪽 끝에 1×2 두 개 / 2×2 하나 붙이기

## 풀이 과정에서 새롭게 느낀점(배운점)

- DP... 규칙이 바로 안 보이면 dp[1], dp[2], dp[3] ... 직접 써보기 (쭉.. 점화식이 생각나는대로)

---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const N = +fs.readFileSync(filePath).toString().trim();

const dp = Array.from({length: N +1}).fill(0);

dp[1] = 1;
dp[2] = 3;
// dp[3] = 8;
// dp[4] = 14;

for(let i =3; i <= N; i++){
    dp[i] = ( dp[i-1] + dp[i-2] *2 ) % 10007
}

console.log(dp[N])
```

---

## 문제
2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

## 출력
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

