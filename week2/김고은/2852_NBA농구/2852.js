const fs = require("fs");
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

// 배열 마지막 부분 처리
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


