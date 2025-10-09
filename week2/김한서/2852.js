const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
});

rl.on("close", function () {
  const n = Number(input[0]);
  let scores = [];
  for (let i = 1; i <= n; i++) {
    const [team, time] = input[i].split(" ");
    const [mm, ss] = time.split(":").map(Number);
    const totalSec = mm * 60 + ss;
    scores.push([Number(team), totalSec]);
  }

  let score1 = 0;
  let score2 = 0;
  let win1 = 0;
  let win2 = 0;
  let prevTime = 0;

  for (let i = 0; i < n; i++) {
    const [team, time] = scores[i];

    if (score1 > score2) win1 += time - prevTime;
    else if (score2 > score1) win2 += time - prevTime;

    if (team === 1) score1++;
    else score2++;

    prevTime = time;
  }

  const endTime = 48 * 60;
  if (score1 > score2) win1 += endTime - prevTime;
  else if (score2 > score1) win2 += endTime - prevTime;

  const format = (t) =>
    `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(
      2,
      "0"
    )}`;

  console.log(format(win1));
  console.log(format(win2));
});
