const solution = (n, a, b) => {
  // i, i+1 이렇게 되는 경우를 구하시오.

  let answer = 0;

  while (a !== b) {
    n /= 2;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
};

// 테스트 케이스 (a < b)
solution(8, 1, 2); // 예외 1: b가 바로 옆에 있는 경우 1(현재 대진에 바로 만남)
solution(8, 2, 3); // 예외 2: b가 바로 옆에 있는 경우 2(그러나 다음 대진에 만남)
solution(8, 4, 7); // 일반적인, 떨어져 있는 케이스

// Math.abs(a-b)는 왜 안돼..?
