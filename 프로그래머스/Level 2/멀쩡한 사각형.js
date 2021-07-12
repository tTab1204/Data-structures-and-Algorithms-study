const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const solution = (w, h) => {
  let whole = w * h;
  let broken = h * 2 - gcd(w, h) * 2;
  return whole - broken;
};

// 풀이 강의 봐도 그냥 강의 없었으면 진짜 못 풀었겠다 수준..

// 유클리드 호제법을 재귀함수로 구현한 것에 대한 정확한 이해가 필요

// 기본적으로 직선이 지나는 사각형들은 가로와 세로로 보낼 수 있다.
// 그러나 최대공약수 때에는 점을 지나기 때문에 사각형 하나를 한쪽으로 밖에 못 보낸다.
// 그래서 w+h만큼 사각형에서 최대공약수만큼의 사각형을 빼면 된다??????????????
// w*h - gcd(w,h)가 왜 이게 이렇게 되는거?

// 다른 사람의 풀이
function solution(w, h) {
  const slope = h / w; // 기울기
  let result = 0;

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
  }

  return (h * w - result) * 2;
}

// 나중에 다시 ㄱㄱ
