function solution(nums) {
    let phoneketmon = new Map()
    nums.forEach((e) => {
        phoneketmon.set(e, (phoneketmon.get(e) ?? 0) +1);
    })
    
    return(phoneketmon.size > Math.floor(nums.length /2) ?  Math.floor(nums.length / 2) : phoneketmon.size)
}

// 코테 전날 벼락치기 메서드 정리
// map.set('a', 10);      // 값 저장
// map.get('a');          // 10
// map.has('a');          // true
// map.delete('a');       // 삭제
// map.has('a');          // false
// map.size;              // 현재 key 개수
// map.clear();           // 전체 삭제