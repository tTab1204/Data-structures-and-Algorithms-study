// 혼자 못 풀었다.

var totalMoney = function (n) {
  let output = 0;
  let mondays = 1;
  let deposit = 1;

  for (let i = 1; i <= n; i++) {
    output += deposit; // 그걸 output에 계속 누적시켜 담는다
    deposit++; // 예금을 1씩 더해주면서

    // i가 7의 배수가 될 때 (주가 넘어갈 때)
    if (i % 7 === 0) {
      mondays++; // 월요일을 더해주자
      deposit = mondays; // 다시 예금은 2부터 시작
    }
  }

  return output;
};

//이해했다. 직관적
