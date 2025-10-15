
[# 문제링크](https://www.acmicpc.net/problem/11286)

## 접근 방향 설명
> NnM 시리즈가 백트랙킹으로 유명해서 바로 풀게 되었다 
> idx 와 count를 전달하며, 재귀함수 호출 이후 `방문 = false 처리 & temp.pop()` 이 중요했다

[MnN 돌아가는 순서](https://staying.fun/en/features/algorithm-visualize?code=985a36561f297a396d4edf05df28eb1383e712f367d5d0ad58b8a08c395dea40)

## 풀이 과정에서 새롭게 느낀점(배운점)

- 역시 백트래킹은 어렵다.. 연습만이 살길. .. 

---

## 풀이 코드

```js
const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const ans = [];
let temp = [];
let visited_Arr = Array.from({length: N +1}).fill(false); 

const MnN = (idx, count) => {
    if(count === M){
        ans.push(temp.join(" "))
    }

    for(let i = idx; i <= N; i++){
        if(visited_Arr[i]) continue;
        visited_Arr[i]= true;
        temp.push(i);
        MnN(i, count +1);
        temp.pop();
        visited_Arr[i] = false;
    }
}

MnN(1, 0);

console.log(ans.join("\n"))
```

---

## 문제
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
고른 수열은 오름차순이어야 한다.

## 입력
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

## 출력
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.