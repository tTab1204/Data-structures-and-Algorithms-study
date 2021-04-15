// 1. 최댓값과 최솟값
function solution(s) {
  let arr = [];
  let temp = [];
  arr = s.split(" ").sort((a, b) => a - b);

  let min = arr.shift();
  let max = arr.pop();

  temp.push(min);
  temp.push(max);

  return temp.join(" ");
}

// 다른 사람의 풀이
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}

// Math.max, Math.min을 생각 못했다. 여러 내장 함수를 잘 활용해보자.
// 안에 전개 연산자로 넣으니까 되네
// max, min이 문자열도 되는게 신기 (Number, String이렇게 써줄 필요 없음)

// 2. 숫자의 표현
// 혼자 못 풀었다.
// 투포인트 알고리즘

function solution(n) {
  let answerNum = 0;
  let middle = Math.ceil(n / 2); // middle까지만 확인하면 됨
  let sum = 0;
  let arr = [];

  // 더하기 위해서 배열 생성
  for (let i = 1; i <= middle; i++) {
    arr.push(i);
  }

  // 배열의 처음요소부터 순차적으로 더하다가 합이 n이면 다음 숫자부터 다시 반복
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum === n) {
        answerNum++;
        break;
      } else if (sum > n) {
        break;
      }
    }
    sum = 0;
  }

  return answerNum + 1; //자기자신(n)일 경우 고려
}

// 내껀 시간초과되는데 왜 이건 시간초과가 안되는걸까
// 생각해보고 다시 풀기 ㄱㄱ

// 3. 가장 큰 정사각형 찾기

// 혼자 못 풀었다. 나중에 다시 풀어보기.

// 다이나믹 프로그래밍(Dynamic Programming)으로 푸는 문제
function solution(board) {
  var x_len = board[0].length;
  var y_len = board.length;
  var answer = 0;

  // 배열의 행과 열이 1이면 정사각형은 무조건 1이 나온다. // 0이 나올수도 있긴함.
  if (x_len < 2 || y_len < 2) return 1;

  // 1부터 쭉 탐색하면서 자신의 왼쪽 왼쪽상단, 상단 3개의 값을 비교하며 값을 채워넣는다.
  for (var i = 1; i < y_len; i++) {
    for (var j = 1; j < x_len; j++) {
      if (board[i][j] > 0) {
        let min = Math.min(
          board[i - 1][j - 1], // 0
          board[i][j - 1], // 1 (세로: 두번째 배열의 0번지 요소)
          board[i - 1][j] // 1 (가로: 첫번째 배열의 1번지 요소)
        );
        board[i][j] = min + 1;
      }
      if (answer < board[i][j]) {
        answer = board[i][j];
      }
    }
  }
  return answer * answer;
}
board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

//모르겠당 모르겠당 모르겠당
// ???????????????
// 나중에 다시 ㄱㄱ (동적 프로그래밍 이해 더 잘하고 다시 ㄱㄱㄱㄱ)

// 4. 소수찾기
const solution = (numbers) => {
  let max = numbers
    .split("")
    .sort((a, b) => b - a)
    .join("");
  let maxNum = Number(max);
  for (let i = 2; i <= maxNum; i++) {}
};

numbers = "17";
solution(numbers);

//????????????????????
// 나중에 다시 이것도 다시

// 5. 카펫
function solution(brown, yellow) {
  let sum = brown + yellow;
  let temp = [];
  // Math.floor를 사용한 이유: 정수값을 얻기 위해서
  for (let i = Math.floor(sum / 2); i > 0; i--) {
    if (sum % i !== 0) continue;

    let width = i;
    let height = sum / i;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

