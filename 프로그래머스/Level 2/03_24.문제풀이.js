// 1.예상 대진표
const solution = (n, a, b) => {
  let answer = 1;

  while (Math.abs(a - b) > 1) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  // 만약 a=1, b=2라면
  if (a < b) {
    if (a % 2 === 0) answer = answer + 1;
  } else {
    if (b % 2 === 0) answer = answer + 1;
  }
  return answer;
};

n = 8;
a = 3;
b = 2;
solution(n, a, b);

// 이 풀이는 왜 테스트케이스 7번, 33번이 안되는지 모르겠다.

// 2. 행렬의 곱셈

function solution(arr1, arr2) {
  var answer = [];
  for (var i = 0; i < arr1.length; i++) {
    var row = []; // 행을 담을 배열 생성

    for (var j = 0; j < arr2[0].length; j++) {
      var rowNum = 0;
      for (var q = 0; q < arr1[0].length; q++) {
        rowNum += arr1[i][q] * arr2[q][j];
      }
      row.push(rowNum);
    }
    answer.push(row);
  }
  return answer;
}
// 행렬문제 어떻게 풀지
// 다시 풀어도 이해 못하겠다. 나중에 누군가한테 질문 ㄱㄱ

// 3. 짝지어 제거하기
const solution = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length ? 0 : 1;
};

// 이제 다시 안 푼 문제들 풀기
// while문으로 하면 왜 효율성 통과 못하지
// 똑같은데
// shift()를 써서 속도에 문제가 있었나보다.
