function solution(sizes) {
    let max_side = 0;
    let another_side = 0;
    
    // 가로 /세로 구분없이 제일큰건 커버해야함 
    sizes.forEach((e) => {
        const [w, h] = e
        let bigger_side = w > h? w : h;
        if(bigger_side > max_side ) max_side = bigger_side
    })
    
    // 나머지 한쪽면 
    sizes.forEach((e) => {
        const [w, h] = e
        let smaller_side = w < h? w : h;
        if(smaller_side > another_side) another_side = smaller_side;
    })
    
    return max_side * another_side;
}