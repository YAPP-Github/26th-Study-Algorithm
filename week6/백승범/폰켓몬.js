function solution(nums) {
    const hash = new Map();
    nums.forEach((val) => {
        hash.set(val)
    })
    if(hash.size >= Math.floor(nums.length/2)) {
        return Math.floor(nums.length/2);
    }
    return hash.size
}