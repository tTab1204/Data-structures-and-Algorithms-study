// 혼자 못 풀었다.

//여러수의 최소공배수는
// 앞에서부터 두개의 수를 최소공배수로 리턴하는 방식으로 구할 수 있다.
// [2,6,8,14] => [6, 8, 14] => [24, 14] => [168]
function solution(arr) {
  // 최대공약수
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  return arr.sort().reduce((a, b) => (a * b) / gcd(a, b));
}

// sort를 쓰는 이유: gcd 연산 중 (작은 값 / 큰 값)으로 나누는 경우의 입력을 방지하기 위함

// 다시 풀기
