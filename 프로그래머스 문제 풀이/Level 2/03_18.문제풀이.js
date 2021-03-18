// 1. 최솟값 만들기
function solution(A, B) {
  let mul = 0;
  let answer = 0;

  while (B.length > 0) {
    // A 배열의 최솟값
    let minA = Math.min.apply(null, A);
    // B 배열의 최댓값 설정
    let maxB = Math.max.apply(null, B);
    // A의 최솟값 * B의 최댓값을 구하고, 얘네를 각 배열에서 제거
    // A의 최솟값 * B의 최댓값... 반복..
    mul = minA * maxB;

    answer += mul;

    let minAindex = A.indexOf(minA);
    let maxBindex = B.indexOf(maxB);

    A.splice(minAindex, 1); // A의 현재 최솟값을 제거
    B.splice(maxBindex, 1); // B의 현재 최댓값을 제거
  }
  return answer;
}

// 다른 사람의 풀이

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

// reduce() 이렇게도 사용 가능한가?

// 2. 스킬트리

const solution = (skill, skill_trees) => {
  // skill을 배열로 만들기
  let newArr = skill.split("");

  let count = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let str = skill_trees[i].split("").filter((item) => newArr.includes(item));

    // substring(n, m): n이상 m미만
    if (str.join("") === skill.substring(0, str.length)) count++;
  }
  return count;
};

let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

solution(skill, skill_trees);

// 이해했다. 그래도 나중에 한번 더 풀어보기.

// 다른 사람의 풀이
function solution(skill, skill_trees) {
  function isCorrect(n) {
    // const test = '[' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(v => !skill.includes(v)).join('') + ']*';
    let test = skill.split("");
    for (var i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(isCorrect).length;
}
// 지금 이해가 잘 안된다. 나중에 다시 ㄱㄱㄱ

// 3. 멀쩡한 사각형

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

// 4. 괄호 변환
function solution(p) {
  // 1. n.length === 0

  // 2. if(n === 'u')

  // 2. if(n === 'v')
  n[0] === "(";

  // 3.

  // ???
  // 다시
}
