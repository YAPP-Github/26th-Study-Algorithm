
[# 문제링크](https://www.acmicpc.net/problem/2852)

## 접근 방향 설명
> 득점 정보를 바탕으로, 경기를 이기고 있는 시간을 누적하는 문제!

> (1) 시간을 초 단위로 변환해서 배열에 저장 
> (2) 이전 리드 팀이 있었다면 현재시각 - prevTime만큼 누적
> (3) 득점한 팀의 점수 갱신
> (4) prevTime 갱신
> (5) 종료 시간 - 마지막 리드팀 time_stamp 누적 

 
## 풀이 과정에서 새롭게 느낀점(배운점)

- 생각보다 되게 오래걸렸던 문제.. 변수를 여러개 쓸까 하다가 처음에 배열로 푸려고 했다가 꽤나 복잡해져서 결국 새로 코드를 짰던 문제였다 
특히, 점수가 같아 질때마다 배열을 갱신할때에 어려움이 있어서 한참을 헤맸다. 
무엇가 단순히 변수로 할당해서 풀기보다는 자료구조를 써야할 것 같다는 이상한 강박이 있었던거 같은데 해당 문제를 접하고 이런 강박이 좋지 않단걸 느꼈던 것 같다.

---

## 풀이 코드

```js
const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = + input.splice(0,1)[0];
let records = [];
let scored_1 = 0;
let scored_2 = 0;
let ans_arr = [0,0];
let prev_timeStamp = 0;

for(let i =0; i < N; i++){
    let [teamNum, time] = input[i].split(" ");
    let [min, sec] = time.split(":").map(Number);

    records.push([teamNum, min * 60 + sec])
}


for(let i =0; i < N; i++){
    const [scored_team, now] = records[i];

    if(scored_1 > scored_2) {
        ans_arr[0] +=  now - prev_timeStamp;
    } else if (scored_1 < scored_2) {
        ans_arr[1] +=  now - prev_timeStamp;
    }

    if(scored_team == 1) scored_1 +=1
    else scored_2 += 1;

    prev_timeStamp = now
}

let total_time = 48 * 60;

if(scored_1 > scored_2){
    ans_arr[0] += total_time - prev_timeStamp;
} else  if (scored_1 < scored_2) {
    ans_arr[1] += total_time - prev_timeStamp;
}


ans_arr.map((e) => {
    let min = 0;
    let sec = 0;
    if(e >= 60) {
        min = Math.floor(e / 60);
    }

    sec = e % 60;

    console.log(`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`)
})
```

---

## 문제
동혁이는 NBA 농구 경기를 즐겨 본다. 동혁이는 골이 들어갈 때 마다 골이 들어간 시간과 팀을 적는 이상한 취미를 가지고 있다.

농구 경기는 정확히 48분동안 진행된다. 각 팀이 몇 분동안 이기고 있었는지 출력하는 프로그램을 작성하시오.

## 입력
첫째 줄에 골이 들어간 횟수 N(1<=N<=100)이 주어진다. 둘째 줄부터 N개의 줄에 득점 정보가 주어진다. 득점 정보는 득점한 팀의 번호와 득점한 시간으로 이루어져 있다. 팀 번호는 1 또는 2이다. 득점한 시간은 MM:SS(분:초) 형식이며, 분과 초가 한자리 일 경우 첫째자리가 0이다. 분은 0보다 크거나 같고, 47보다 작거나 같으며, 초는 0보다 크거나 같고, 59보다 작거나 같다. 득점 시간이 겹치는 경우는 없다.

## 출력
첫째 줄에 1번 팀이 이기고 있던 시간, 둘째 줄에 2번 팀이 이기고 있던 시간을 출력한다. 시간은 입력과 같은 형식(MM:SS)으로 출력한다.

## 예제 입력 1 
1
1 20:00

## 예제 출력 1 
28:00
00:00