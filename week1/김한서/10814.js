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
  const N = Number(input[0]);
  const members = [];
  for (let i = 0; i < N; i++) {
    const [age, name] = input[i + 1].split(" ");
    members.push({ age: age, name: name });
  }
  members.sort((a, b) => a.age - b.age);
  members.forEach((member) => console.log(member.age + " " + member.name));
});
