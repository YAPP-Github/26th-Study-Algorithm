
[# 문제링크](https://www.acmicpc.net/problem/1654)

## 접근 방향 설명
> 원하는 랜선 길이를 구해야 하는 문제이다, 
> 하지만 N도 1,000,000 까지의 정수이고, 랜선의 길이 최대치도 2^31-1 이기 때문에 탐색중 이분탐색을 사용했다 

> 1) 랜선 길이를 구해야 하기에, `start(최소치랜선길이)=1` / `end(최대치랜선길이)=wire최대값` 에서 이분탐색을 진행한다
> 2) 이때 탐색의 기준은 ` count = getWireCount(mid_cm);` 가 N보다 큰지 / 작은지를 기준으로 한다.
```js
if(count >= N){
    if(mid_cm > ans_long) ans_long = mid_cm; 
    start = mid_cm +1; // 나눠진 랜선수가 많으면, 길이가 너무 작음 -> start 키움
} 

else if (N > count){
    end = mid_cm - 1; // 나눠진 랜선수가 적으면, 길어가 너무 큼 -> end 줄임
}
```
> 3) 탐색을 진행하면서 **N개보다 많이 만드는 것도 N개를 만드는 것에 포함** 되기 때문에 `ans_long = mid_cm;` 최적의 긴 랜선 길이를 갱신시켜준다

## 풀이 과정에서 새롭게 느낀점(배운점)

- 딱히 문제없이 빠르게 풀었던 문제 : ) 

---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input.split(" ").map(Number);
let wires = arr.map(Number)

let start = 1;
let end = Math.max(...wires);
let ans_long = 0;

function getWireCount (long) {
    let count = 0;

    wires.forEach((wire) => {
        count += Math.floor(wire / long)
    })

    return count;
}

while(start <= end){
    let mid_cm = Math.floor((start + end) / 2 );
    let count = getWireCount(mid_cm);

    if(count >= N){
        if(mid_cm > ans_long) ans_long = mid_cm; 
        start = mid_cm +1; // 나눠진 랜선수가 많으면, 길이가 너무 작음 -> start 키움
    } 

    else if (N > count){
        end = mid_cm - 1; // 나눠진 랜선수가 적으면, 길어가 너무 큼 -> end 줄임
    }
}

console.log(ans_long)
```

---

## 문제
집에서 시간을 보내던 오영식은 박성원의 부름을 받고 급히 달려왔다. 박성원이 캠프 때 쓸 N개의 랜선을 만들어야 하는데 너무 바빠서 영식이에게 도움을 청했다.

이미 오영식은 자체적으로 K개의 랜선을 가지고 있다. 그러나 K개의 랜선은 길이가 제각각이다. 박성원은 랜선을 모두 N개의 같은 길이의 랜선으로 만들고 싶었기 때문에 K개의 랜선을 잘라서 만들어야 한다. 예를 들어 300cm 짜리 랜선에서 140cm 짜리 랜선을 두 개 잘라내면 20cm는 버려야 한다. (이미 자른 랜선은 붙일 수 없다.)

편의를 위해 랜선을 자르거나 만들 때 손실되는 길이는 없다고 가정하며, 기존의 K개의 랜선으로 N개의 랜선을 만들 수 없는 경우는 없다고 가정하자. 그리고 자를 때는 항상 센티미터 단위로 정수길이만큼 자른다고 가정하자. N개보다 많이 만드는 것도 N개를 만드는 것에 포함된다. 이때 만들 수 있는 최대 랜선의 길이를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에는 오영식이 이미 가지고 있는 랜선의 개수 K, 그리고 필요한 랜선의 개수 N이 입력된다. K는 1이상 10,000이하의 정수이고, N은 1이상 1,000,000이하의 정수이다. 그리고 항상 K ≦ N 이다. 그 후 K줄에 걸쳐 이미 가지고 있는 각 랜선의 길이가 센티미터 단위의 정수로 입력된다. 랜선의 길이는 231-1보다 작거나 같은 자연수이다.

## 출력
첫째 줄에 N개를 만들 수 있는 랜선의 최대 길이를 센티미터 단위의 정수로 출력한다.
