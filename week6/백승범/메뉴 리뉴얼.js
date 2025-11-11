function solution(orders, course) {
    let answer = [];

    function getCombinations(arr, num) {
        let result = [];
        const len = arr.length;

        function combine(path, idx) {
            if (path.length === num) {
                result.push(path.slice());
                return;
            }

            for (let i = idx; i < len; i++) {
                path.push(arr[i]);
                combine(path, i + 1);
                path.pop();
            }
        }

        combine([], 0);
        return result;
    }

    for (let c = 0; c < course.length; c++) {
        let courseSize = course[c];
        let comboMap = new Map();
        let maxCount = 0;

        for (let i = 0; i < orders.length; i++) {
            let order = orders[i].split('').sort(); 
            let combis = getCombinations(order, courseSize);

            for (let j = 0; j < combis.length; j++) {
                let key = combis[j].join('');
                let count = comboMap.get(key) || 0;
                comboMap.set(key, count + 1);

                if (comboMap.get(key) > maxCount) {
                    maxCount = comboMap.get(key);
                }
            }
        }

        for (let [key, count] of comboMap) {
            if (count === maxCount && count >= 2) {
                answer.push(key);
            }
        }
    }

    return answer.sort();
}