
[# 문제링크](https://www.acmicpc.net/problem/11725)

## 접근 방향 설명

## 접근 방향 설명
> 1) **부모 자식 구분 없이, 연견된 노드를 배열**에 넣어준다 
```js
for(let i =0; i < rest.length; i++){
    const [node1, node2] = rest[i].split(" ").map(Number)
    tree[node1] = [...tree[node1], node2]
    tree[node2] = [...tree[node2], node1]
}
```
```js
// 배열에 저장된 연결 노드 (자식 부모 구분 x)
[
  [],          [ 6, 4 ],
  [ 4 ],       [ 6, 5 ],
  [ 1, 2, 7 ], [ 3 ],
  [ 1, 3 ],    [ 4 ]
]
```
> 2) 1번 노드에 대한 연결 노드부터 시작하여 BFS 을 돈다
```js
for(let i =0; i < tree[1].length; i++){
    need_to_visite.push([1, tree[1][i]]);
}
```
> 3) BFS  탐색시, **부모 노드를 제외한 나머지를 방문 예정 배열에 넣는다**
```js
if(!visited[to]){
    visited[to] = true;
    ans[to] = from;

    tree[to].forEach((e) => {
        if(e !== from) {
            need_to_visite.push([to, e]);
        }
    })
}
```


## 풀이 과정에서 새롭게 느낀점(배운점)

- shift 의 연산 리소스를 생각하기!!! 
인덱스로 접근할 수 있으면 해보기 

---

## 풀이 코드

```js
const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rest]= fs.readFileSync(filePath).toString().trim().split('\n');

let tree = Array.from({length: +N + 1}, () => []);
let visited = Array.from({ length: +N + 1 }, () => false);
let need_to_visite = [];
let ans = [];

for(let i =0; i < rest.length; i++){
    const [node1, node2] = rest[i].split(" ").map(Number)
    tree[node1] = [...tree[node1], node2]
    tree[node2] = [...tree[node2], node1]
}

for(let i =0; i < tree[1].length; i++){
    need_to_visite.push([1, tree[1][i]]);
}

visited[1] = true;
let idx = 0;

while (need_to_visite.length > idx){
    let [from, to] = need_to_visite[idx++];
    if(!visited[to]){
        visited[to] = true;
        ans[to] = from;

        tree[to].forEach((e) => {
            if(e !== from) {
                need_to_visite.push([to, e]);
            }
        })
    }
}

for (let i = 2; i <= N; i++) {  
    console.log(ans[i]);
}
```

---

## 문제
루트 없는 트리가 주어진다. 이때, 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.

## 출력
첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.