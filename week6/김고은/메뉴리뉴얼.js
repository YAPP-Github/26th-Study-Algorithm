// 풀이 열람
// (1) 각 주문들의 조합 구하기 
// (2) 조합들의 갯수 구하기 
function solution(orders, course) {
    let ans = []
    orders = orders.map((e) => e.split('').sort().join(''))
    
    course.map((e) => {
        let map = new Map;
        orders.map((order) => {
            // console.log(getCombinations(order.split('') ,e))
            // console.log('===================================')
            let combination_arr = getCombinations(order.split('') ,e)
            combination_arr.map((cm) => {
                let cm_string = cm.join('');
                map.set(cm_string, (map.get(cm_string) || 0) +1);
            })
        })
        let max = Math.max(...map.values())
        console.log(max)
        if(max >= 2){
            for([menu, count] of map.entries()) {
                if(count == max) ans.push(menu)
            }}
        })
    return ans.sort()
}

// combination function
function getCombinations (arr, n) {
    // 종료 조건 (단일 원소 반환 ), ['A','B','C'], n=1 -> [['A'], ['B'], ['C']]
    if(n == 1) return arr.map((e) => [e]);
    let result = [];
    
    // 각 원소를 고정점 잡음 (fixes)
    arr.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1); // 고정점 뒤로, 배열 갱신 (원배열에는 영향 x origin 넣어주기)
      const combos = getCombinations(rest, n - 1); // 재귀 호출 (고정점 뒤로)
      const attached = combos.map(c => [fixed, ...c]); // 고정점이 제일 앞에 등장하는 새로운 조합 
      result.push(...attached);
    });
    return result; 
}
