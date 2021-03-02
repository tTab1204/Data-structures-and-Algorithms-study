// 다음 큰 숫자
function solution(n) {
  let answer = 0;
  let target = n + 1;
  let newN = n.toString(2);
  let nOneLength = newN.split("").filter((item) => item === "1").length;

  while (target > n) {
    if (
      nOneLength ===
      target
        .toString(2)
        .split("")
        .filter((item) => item === "1").length
    ) {
      break;
    }
    target = target + 1;
  }
  answer = target;

  return answer;
}
