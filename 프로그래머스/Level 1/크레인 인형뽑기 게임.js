// 스스로 못 풀었다. 이 방법 이해해보자.

function solution(board, moves) {
  var answer = 0;
  var result = [];

  // moves길이 만큼 for문 반복
  for (var i = 0; i < moves.length; i++) {
    for (var j = 0; j < board.length; j++) {
      // 여기가 포인트! 꼭 i,j로만 배열을 완성시키려 하지 말것!
      // moves[i]-1: moves배열에는 1번째, 5번째, 3번째... 이렇게 되어 있으니
      // 배열의 번지수로 바꾸려면 0번지, 4번지, 2번지.. 이렇게 되어야 하니
      // -1을 해준다.
      if (board[j][moves[i] - 1] !== 0) {
        //0이 아닐때 result에 추가
        if (result[result.length - 1] === board[j][moves[i] - 1]) {
          //result를 비교해서 앞뒤가 같으면 빼고
          result.pop();
          answer += 2;
          board[j][moves[i] - 1] = 0; // 초기화
          break;
        } else {
          // result가 다르면 push해서 결과값에 추가한다.
          result.push(board[j][moves[i] - 1]);
          board[j][moves[i] - 1] = 0;
          break;
        }
      }
    }
  }
  return answer;
}

// 이해가 되긴 되는데.. 어떻게 이런 생각을 할 수 있는지 잘 모르겠다.

// 혼자 못 풀었다.

// 이번엔 이해 ㄱㄱ

// board[i][moves[i] - 1] !!
// moves[i]-1으로 구할 수 있다..
function solution(board, moves) {
  let choicesCount = 0;
  let stack = [];
  let point = 0;
  // 1. 처음에는 moves.length 기준으로 반복문을 돌고
  for (let i = 0; i < moves.length; i++) {
    // 2. 두번째 반복문에서는 board.length를 기준으로 돌면서
    // moves[i]에 해당되는 열 숫자들을 모두 검사한다.
    for (let j = 0; j < board.length; j++) {
      // 3. 뽑는 인형이 빈칸(=0) 이면 안된다.
      if (board[j][moves[i] - 1] !== 0) {
        // 겹칠때는 없애기
        if (stack[stack.length - 1] === board[j][moves[i] - 1]) {
          stack.pop();
          point += 2;
          // 안 겹치면 그대로 넣기
        } else stack.push(board[j][moves[i] - 1]);

        // stack 배열에 넣었으면 해당 칸은 빈칸이 되어야 한다.
        board[j][moves[i] - 1] = 0;
        // break가 필요한 이유는??
        // 아 뽑으면 moves에서 다음 요소로 넘어가야 하니까
        // 이해했당
        break;
      }
    }
  }
  return point;
}
