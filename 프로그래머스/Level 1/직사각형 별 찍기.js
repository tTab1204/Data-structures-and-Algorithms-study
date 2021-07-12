const a = 5;
const b = 3;

let stars = "";

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    stars += "*";
  }
  // 줄바꿈
  stars += "\n";
}
console.log(stars);

// 다른 사람의 방법
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
    

  // 열을 만든다니..
  let stars_row = "*".repeat(a);
}

  // repeat() 메소드는 많은 것을 주어진 횟수만큼 반복 해 붙인 새로운 것을 반환합니다.
  // stars_row = '*****'
