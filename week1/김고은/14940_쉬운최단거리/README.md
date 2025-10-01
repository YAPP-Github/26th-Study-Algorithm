
[# 문제링크](https://www.acmicpc.net/problem/14940)

## 접근 방향 설명

> 너비 우선 탐색으로, 돌면서 지나갈때마다 시작점을 기준으로 몇번 움직였는지 표시해주면 되는 문제 
> 방문여부를 표시하는 배열에 -1 로 초기화 후, 시작점과, 지나갈 수 없는 좌표에 0을 넣어준다. 
> 이후 BFS를 돌며, 탐색 횟수를 ans 배열에 넣어준다 


---

## 풀이 과정에서 새롭게 느낀점(배운점)

- BFS 자체를 떠올리는데에는 어려움이 없었지만, 엄한 곳에서 조금 헤맸다..!

- 이유는 바로 방문여부를 표시하는 배열을 만들다가 아래와 같이 작성했더니 visited_arr[i][j]에 값을 할당해도 제대로 동작하지 않았기 때문이다.

```js
let visited_arr = Array.from({length: n}.map(new Array(m)).fill(-1));
```

이렇게 되면 같은 배열을 여러 번 참조히야 만들어져, 한 행을 수정하면 모든 행이 같이 바뀌는 현상이 발생하는데 
`.fill()`이 같은 객체(배열)를 반복해서 넣기 때문이라고 한다. (얕은 복사가 이루어져서, 주소를 여러번 복사해서 배열이 채워지기 때문)

```js
let visited_arr = Array.from({length: n}, () => new Array(m).fill(-1));
```

---

## 풀이 코드

```js
let fs = require("fs")
let filePath = process.platform === "linux"? "/dev/stdin": __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.splice(0,1)[0].split(' ').map(Number);

// 미방문 1 // 방문 0
let visited_arr = Array.from({length: n}, () => new Array(m).fill(-1));
let ans = Array.from({length: n}, () => new Array(m).fill(0));
let need_to_visite = [];
let map = [];
let start_cor = []; // x, y
let moves = [[-1,0], [1,0], [0, -1], [0, 1]];

// 지도 이차원 배열로 변환
for(let i = 0; i < n; i++){
    map.push(input[i].split(" "));
}

// 시작점 잡기 + 불가능 좌표 표시
for(let i = 0; i < n; i++ ){
    for(let j =0; j < m; j++){
        if(map[i][j] === '2') {
            start_cor = [i, j];
            visited_arr[i][j] = 0;
        } 
        else if (map[i][j] === '0') {
            visited_arr[i][j] = 0;
        }
    }
}

need_to_visite.push([...start_cor, 0])

while( need_to_visite.length > 0){
    let [x, y, moved] = need_to_visite.pop();
    ans[x][y] = moved
    for(let move of moves){
        let next_x = x + move[0];
        let next_y = y + move[1];

        if(next_x >= 0 && next_x < n && next_y >= 0 && next_y < m){
            if(visited_arr[next_x][next_y] !== 0) {
                need_to_visite.unshift([next_x, next_y, moved + 1]);   
                visited_arr[next_x][next_y] = 0;
            }
        }
    }
}

for(let i =0; i < n; i ++){
    console.log(ans[i].join(" "));
}
```

---

## 문제
지도가 주어지면 모든 지점에 대해서 목표지점까지의 거리를 구하여라.

문제를 쉽게 만들기 위해 오직 가로와 세로로만 움직일 수 있다고 하자.

## 입력
지도의 크기 n과 m이 주어진다. n은 세로의 크기, m은 가로의 크기다.(2 ≤ n ≤ 1000, 2 ≤ m ≤ 1000)

다음 n개의 줄에 m개의 숫자가 주어진다. 0은 갈 수 없는 땅이고 1은 갈 수 있는 땅, 2는 목표지점이다. 입력에서 2는 단 한개이다.

## 출력
각 지점에서 목표지점까지의 거리를 출력한다. 원래 갈 수 없는 땅인 위치는 0을 출력하고, 원래 갈 수 있는 땅인 부분 중에서 도달할 수 없는 위치는 -1을 출력한다.