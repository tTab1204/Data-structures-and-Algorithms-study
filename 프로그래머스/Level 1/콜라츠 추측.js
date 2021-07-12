function solution(num) {
  let count = 0;

  while (num > 1) {
    if (count >= 500) {
      return -1;
    }

    if (num % 2) {
      num = num * 3 + 1;
    } else if (num === 1) {
      return num;
    } else {
      num /= 2;
    }
    count++;
  }
  return count;
}

// 다른 사람의 풀이
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
// 삼항연산자 깔-끔
