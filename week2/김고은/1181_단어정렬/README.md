
[# 문제링크](https://www.acmicpc.net/problem/1181)

## 접근 방향 설명
> 정렬 옵션에, 조건부가 섞인 case 로 우선 순위가 (1) 짧은 단어부터 (2) 사전 순으로 정렬해주면 되었다 
```js
// 1. 길이가 짧은 것부터 정렬
if(a.length !== b.length) return a.length - b.length;

// 2. 길이가 같으면 사전 순으로
else {
    let idx = 0;
    while(a[idx] == b[idx]){
        idx +=1;
    }
    return a.charCodeAt(idx) -  b.charCodeAt(idx)
}
```

## 풀이 과정에서 새롭게 느낀점(배운점)

- 큰 어려움 없이 풀었던 문제로 패스! 


---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, ...arr] = input;
const filtered_arr = [];

// 중복된 단어는 하나만 남기고 제거
for(let i =0; i < N; i++){
    if(filtered_arr.includes(arr[i])) continue;
    filtered_arr.push(arr[i]);
}

filtered_arr.sort((a,b) => {
    // 1. 길이가 짧은 것부터 정렬
    if(a.length !== b.length) return a.length - b.length;

    // 2. 길이가 같으면 사전 순으로
    else {
        let idx = 0;
        while(a[idx] == b[idx]){
            idx +=1;
        }
        return a.charCodeAt(idx) -  b.charCodeAt(idx)
    }
})

console.log(filtered_arr.join("\n"))
```

---


## 문제
알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

길이가 짧은 것부터
길이가 같으면 사전 순으로
단, 중복된 단어는 하나만 남기고 제거해야 한다.

## 입력
첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 주어지는 문자열의 길이는 50을 넘지 않는다.

## 출력
조건에 따라 정렬하여 단어들을 출력한다.