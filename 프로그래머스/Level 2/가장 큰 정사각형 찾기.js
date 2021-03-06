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
          board[i - 1][j], // 1 (가로: 첫번째 배열의 1번지 요소)
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

// 이후에 다시 푼 것

// 1. 가장 큰 정사각형 찾기

// 이 문제 또 혼자 못 풀었다.
// 다이나믹 프로그래밍 활용을 이해해야 함

function solution(board) {
  var lengthY = board.length;
  var lengthX = board[0].length;
  var max = 0;

  // 행이나 열의 길이가 2 미만이라면 직접 돌리면서 1이 하나라도 있는지 체크 합니다.
  // 행이나 열의 길이가 2 미만이면 넓이는 무조건 1이 나오기 때문(0이 나올수도 있음)
  // 하나라도 있으면 통과.
  if (lengthY < 2 || lengthY < 2) {
    for (var i = 0; i < lengthY; i++) {
      for (var j = 0; j < lengthX; j++) {
        if (board[i][j] === 1) {
          max = 1;
        }
      }
    }
  } else {
    //아래 설명 참조
    for (var i = 1; i < lengthY; i++) {
      for (var j = 1; j < lengthX; j++) {
        if (board[i][j] === 1) {
          board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
          //   if (board[i][j] > max) {
          //     max = board[i][j];
          //   }
          max = Math.max(max, board[i][j]);
        }
      }
    }
  }
  return Math.pow(max, 2);
}

// 이해는 했다. 다행이다.
// 출처: https://blog.sonim1.com/212 [Kendrick's Blog]
// 다시 풀어보기 꼭

// 프로그래머스 1300점 넘겼다!

// 다른 사람의 풀이
function findLargestSquare(board) {
  var row = board.length;
  var col = board[0].length;

  var max = 0;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (board[i][j] === 'O') board[i][j] = 1;
      if (board[i][j] === 'X') board[i][j] = 0;

      if (i == 0) continue;
      if (j == 0) continue;
      if (board[i][j] === 0) continue;

      var up = board[i - 1][j];
      var min = up;
      var left = board[i][j - 1];
      min = Math.min(min, left);
      var upleft = board[i - 1][j - 1];
      min = Math.min(min, upleft);
      board[i][j] = min + 1;
      if (min + 1 > max) {
        max = min + 1;
      }
    }
  }
  return max * max;
}
/*
  전체중 O의 개수 13 -> sqrt(13)= 3.xxx -> 최대 3x3이 가능함.

x 1 1 1 x
x 1 2 2 1
x x 1 2 2
x x 1 2 3
x x x x x

규칙: 자신의 위치에서 위,왼쪽,대각선왼쪽위 중 가장 작은것에 1을 더함.
대상값이 없으면 더하지 말자.
0 1 1 1 0
0 1 2 2 1
0 0 1 2 2
0 0 1 2 3
0 0 0 0 0 
*/
//아래 코드는 테스트를 위한 출력 코드 입니다.
var testBoard = [
  ['X', 'O', 'O', 'O', 'X'],
  ['X', 'O', 'O', 'O', 'O'],
  ['X', 'X', 'O', 'O', 'O'],
  ['X', 'X', 'O', 'O', 'O'],
  ['X', 'X', 'X', 'X', 'X'],
];
console.log(findLargestSquare(testBoard));
