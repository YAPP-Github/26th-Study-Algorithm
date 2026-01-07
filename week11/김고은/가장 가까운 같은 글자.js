function solution(s) {
    let store = {};
    let ans = [];
    let arr = s.split('');
    
    arr.forEach((e, idx) => {
        if(store[e] === undefined) ans.push(-1);
        else {
            ans.push(idx - store[e])
        }
        store[e] = idx;
    })
    
    return ans
}