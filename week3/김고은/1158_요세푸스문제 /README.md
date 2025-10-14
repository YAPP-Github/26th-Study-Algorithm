
[# 문제링크](https://www.acmicpc.net/problem/1158)

## 접근 방향 설명
> 원형큐를 이용하여 해결했던 문제! (5, 3) 를 예시로 돌려본다면 아래와 같겠다 
> 1 2 3 4 5 
> 2 3 4 5 1
> (3) 4 5 1 2
> 4 5 1 2 
> 5 1 2 4 
> (1) 2 4 5 
> 2 4 5 
> 4 5 2
> (5) 2 4
// .... 
  
## 풀이 과정에서 새롭게 느낀점(배운점)

- 큰 문제없이 해결하여 생략!

---

## 풀이 코드

```js
const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N, K] = input;
let arr = [];
let ans = [];

// 원형 -> 배열 (처음 - 마지막 연결) 
for(let i =1; i <= N; i++){
    arr.push(i);
}

while(arr.length > 0){
    for(let i = 1; i <= K; i ++){
        let popped = arr.shift();
        if(i === K) ans.push(popped)
        else {
            arr.push(popped)
        }
    }
}

console.log("<"+ans.join(", ")+">")
```

---

## 문제
요세푸스 문제는 다음과 같다.

1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.

N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 N과 K가 빈 칸을 사이에 두고 순서대로 주어진다. (1 ≤ K ≤ N ≤ 5,000)

## 출력
예제와 같이 요세푸스 순열을 출력한다.