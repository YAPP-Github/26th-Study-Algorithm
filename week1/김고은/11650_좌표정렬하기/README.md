
[# 문제링크](https://www.acmicpc.net/problem/11650)

## 접근 방향 설명

> - 10814와 마찬가지로 단순 정렬을 해내면 풀렸던 문제
> [ "x y" ] 의 형식을 ["x", "y"] 의 형식으로 바꿔주고, sort 문을 돌려준다. 
> 만약 x 값이 같다면 y를 비교할 수 있도록 바꾸어주면 되었다.

`key line`
```js
coordinate_arr.sort((a, b) => {
    if(a[0] !== b[0])return a[0] - b[0]
    else return a[1] - b[1] 
})
```

---

## 풀이 과정에서 새롭게 느낀점(배운점)

- 단순 정렬이라 특이 사항 없이 무난하게 풀어냈던 문제! 
이하 생략하겠다 

---

## 풀이 코드

```js
let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin': __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.splice(0,1)[0];

let coordinate_arr = Array.from({length: N})

coordinate_arr.forEach((_, idx) => {
    coordinate_arr[idx] = input[idx].split(' ').map(Number)
})

coordinate_arr.sort((a, b) => {
    if(a[0] !== b[0])return a[0] - b[0]
    else return a[1] - b[1] 
})

coordinate_arr.map((e) => {
    console.log(e.join(" "))
})
```

---

## 문제
2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

## 입력
첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

## 출력
첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.