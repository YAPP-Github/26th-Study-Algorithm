function solution(nums) {
    let hash = new Map;
    let ans = 0;
    
    nums.forEach((e) => {
        hash.set(e)
    })
    
    return (Math.floor(nums.length / 2) >  hash.size ? hash.size : Math.floor(nums.length / 2));
}