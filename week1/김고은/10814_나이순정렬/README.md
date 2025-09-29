
[# 문제링크](https://www.acmicpc.net/problem/10814)

## 접근 방향 설명

> - 단순 정렬을 해내면 풀렸던 문제
> [ "나이 이름" ] 의 형식을 ["나이", "이름"] 의 형식으로 바꿔주고, sort 문을 돌려준다. 

---

## 풀이 과정에서 새롭게 느낀점(배운점)

- 특이 사항 없이 무난하게 풀어냈던 문제! 
이하 생략하겠다 

---

## 풀이 코드

```js
let fs = require('fs');
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...arr] = input;

let members = [];

// arr - > memeber로 변환하기 위한 배열 포멧팅
for(let i =0; i < arr.length; i++) {
    const [age, name] = arr[i].split(' ')
    members.push([+age, name])
}

// 나이순 정렬
members.sort((a,b) => a[0] - b[0])

for(let i = 0; i < members.length; i++){
    console.log(members[i].join(' '))
}
```

---


## 문제
온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.

## 입력
첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)

둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다. 입력은 가입한 순서로 주어진다.

## 출력
첫째 줄부터 총 N개의 줄에 걸쳐 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.