// 1. 약수의 합

// 내 풀이
function solution(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum;
}

// 2. 자릿수 더하기

// 내 풀이
function solution(n) {
  let array = [];
  let sum = 0;
  array = String(n).split("");

  array.map((item) => (sum += Number(item)));

  return sum;
}

// 3. 직사각형 별 찍기
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

  // repeat() 메소드는 많은 것을 주어진 횟수만큼 반복 해 붙인 새로운 것을 반환합니다.
  // stars_row = '*****'

  for (let i = 0; i < b; i++) {
    console.log(stars_row);
  }
});

// 4. 짝수와 홀수

// 내가 푼 방법
function solution(num) {
  if (num % 2 === 1 || num % 2 === -1) {
    return "Odd";
  } else {
    return "Even";
  }
}
// 음수도 들어갈 수 있다!!

function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
// JS에서 0은 false라는 것을 이용했다..........와

// 5. 행렬의 덧셈
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let newArr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      newArr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(newArr);
  }

  return answer;
}

// 다른 사람의 방법
function sumMatrix(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

// map함수의 사용,  화살표 함수의 사용에 더 익숙해지자..
