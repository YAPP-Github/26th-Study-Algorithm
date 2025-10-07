
[# 문제링크](https://www.acmicpc.net/problem/2910)

## 접근 방향 설명

> `Map`을 이용하여, 입력받은 수들의 등장 횟수를 저장
> `Map`에 저장된 데이터를 [숫자, 빈도] 형태의 배열로 변환한 뒤, 빈도가 큰 순서대로 정렬
> 정렬 결과에 따라 각 숫자를 등장 횟수만큼 정답 배열`ans`에 추가

 
## 풀이 과정에서 새롭게 느낀점(배운점)

- 큰 문제없이 해결하여 생략!

---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = []
const [N, C] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let arr_map = new Map();

for(let i =0; i < N; i++){
    if(arr_map.has(arr[i])){
        let num = arr_map.get(arr[i])
        arr_map.set(arr[i], num +1);
    } else {
        arr_map.set(arr[i], 1);
    }
}

arr = Array.from(arr_map).sort((a, b) => b[1] - a[1])

arr.map((e) => {
    let [num, count] = e;

    while(count > 0){
        ans.push(num)
        count--;
    }
})


console.log(ans.join(" "))
```

---

## 문제
위대한 해커 창영이는 모든 암호를 깨는 방법을 발견했다. 그 방법은 빈도를 조사하는 것이다.

창영이는 말할 수 없는 방법을 이용해서 현우가 강산이에게 보내는 메시지를 획득했다. 이 메시지는 숫자 N개로 이루어진 수열이고, 숫자는 모두 C보다 작거나 같다. 창영이는 이 숫자를 자주 등장하는 빈도순대로 정렬하려고 한다.

만약, 수열의 두 수 X와 Y가 있을 때, X가 Y보다 수열에서 많이 등장하는 경우에는 X가 Y보다 앞에 있어야 한다. 만약, 등장하는 횟수가 같다면, 먼저 나온 것이 앞에 있어야 한다.

이렇게 정렬하는 방법을 빈도 정렬이라고 한다.

수열이 주어졌을 때, 빈도 정렬을 하는 프로그램을 작성하시오.

## 입력
첫째 줄에 메시지의 길이 N과 C가 주어진다. (1 ≤ N ≤ 1,000, 1 ≤ C ≤ 1,000,000,000)

둘째 줄에 메시지 수열이 주어진다.

## 출력
첫째 줄에 입력으로 주어진 수열을 빈도 정렬한 다음 출력한다.

