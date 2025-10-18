
[# 문제링크](https://www.acmicpc.net/problem/11053)

## 접근 방향 설명
> 숫자배열을 순회할때마다, 그때마다의 가장 긴 증가 부분 수열의 길이(최적의 값)를 찾아야함 
=> DP 사용
>
> 1. 이중 반복문을 돌며, `for (let j = 0; j < i; j++) ` 를 통해 이전 원소들과 비교를 진행하는데 
> 2. 만약 `num_arr[i-1] > num_arr[j-1]` 이면 **이전수열에 현재 요소를 더한 것으로 추가**하여 -> `dp[j] +1` 처리해준다 
> 
```js
for(let j = 0; j < i; j++){
    if(num_arr[i-1] > num_arr[j-1]) temp_arr.push(dp[j] + 1);
}   
dp[i] = Math.max(...temp_arr)
```


## 풀이 과정에서 새롭게 느낀점(배운점)

- 딱히 문제 없이 풀었던 문제!

---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [A, input] = fs.readFileSync(filePath).toString().trim().split("\n");

let num_arr = input.split(" ").map(Number);

let dp = Array.from({length: +A+1}).fill(0);

dp[1] = 1;

for(let i = 2; i <= A; i++ ){
    let temp_arr = [1];
    for(let j = 0; j < i; j++){
        if(num_arr[i-1] > num_arr[j-1]) temp_arr.push(dp[j] + 1);
    }

    dp[i] = Math.max(...temp_arr)
}

console.log(Math.max(...dp))
```

---

## 문제
수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.

## 입력
첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000)이 주어진다.

둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (1 ≤ Ai ≤ 1,000)

## 출력
첫째 줄에 수열 A의 가장 긴 증가하는 부분 수열의 길이를 출력한다.

