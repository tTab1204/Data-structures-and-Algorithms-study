// 1. 3진법 뒤집기

// var value = 10;
// // 10진법 -> 2, 8, 16 진법으로 변환
// value.toString(2);    // 1010
// value.toString(8);    // 12
// value.toString(16);   // a

function solution(n) {
  let answer = 0;

  // 1. 3진법 변환
  n = n.toString(3);

  // 2. 배열로 변환
  let reversed = n.split("").reverse().join("");

  answer = Number.parseInt(reversed, 3);

  return answer;
}

// 다른 사람의 풀이
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};

// 전개연산자 사용!!

// 내장함수 사용하지 않은 방법
function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
// 나중에 다시 보자.

// 2. 크레인 인형뽑기 게임

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

// 아직도 혼자서는 못 풀었다.
// 다음에는 풀 수 있을 듯 하다.

// 3. 비밀지도

// 10진수로 표현된걸
// 2진수로 바꿔라 이 말 아니야?

// 근데 arr1이랑 arr2랑 어떻게 합치는거지?

// 반복문 한 번 더 돌려서
// 2차원배열로 나오잖아.
// 행렬의 덧셈 하면 되지 않나?

arr1 = [
  ([0, 1, 0, 0, 1],
  [1, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 0, 1, 1]),
];

const solution = (n, arr1, arr2) => {
  // 1. 2차원 배열로 변환
  let newArr1 = [];
  let newArr2 = [];
  for (let i = 0; i < n; i++) {
    newArr1.push(arr1[i].toString(2).split(""));
    newArr2.push(arr2[i].toString(2).split(""));
    if (newArr1[i].length < n)
      for (let j = newArr1[i].length; j < n; j++) {
        newArr1[i].unshift("0");
      }

    if (newArr2[i].length < n)
      for (let j = newArr2[i].length; j < n; j++) {
        newArr2[i].unshift("0");
      }
  }

  // 2. 여기서 2차원배열끼리 덧셈

  let answer = [];
  for (let i = 0; i < newArr1.length; i++) {
    let temp = [];
    for (let j = 0; j < newArr1[i].length; j++) {
      temp.push(newArr1[i][j] + newArr2[i][j]);
    }
    answer.push(temp);
  }

  // 3. 2차원 배열 #이랑 공백으로 변환
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (answer[i][j] === "00") answer[i][j] = " ";
      else answer[i][j] = "#";
    }
    answer[i] = answer[i].join("");
  }
  return answer;
};

// 혼자서 풀긴 했는데
// 한줄로 푼 사람은 뭘까

// 다른 사람의 풀이
function solution(n, arr1, arr2) {
  let num1, num2, s;
  let answer = [];
  //manually turning decimals to binaries cos i can!
  for (let i = 0; i < n; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    s = "";
    for (let j = 0; j < n; j++) {
      s = (num1 % 2) + (num2 % 2) ? "#" + s : " " + s;
      num1 = Math.floor(num1 / 2);
      num2 = Math.floor(num2 / 2);
    }
    answer.push(s);
  }
  return answer;
}
// 2진수로 수동으로 바꾸면서 풀었다.
// 훨씬 깔끔
// 내장함수 의존 그만, 직접 진법 변환 ㄱㄱ
// 2차원 배열 다루는 기본 문제 더 풀어서 공부 ㄱㄱ

// 4. 실패율

// 혼자 못 풀었다.

// 1) 코드 설명

function solution(N, stages) {
  //  (1) 0을 N*2 길이 만큼 넣은 배열 m을 선언한다.
  var m = Array.from({ length: N * 2 }, () => 0);
  var answer = [];
  var index = [];
  //  (2) 이중 for문을 이용해서 stages 배열을 검사한다.
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < stages.length; j++) {
      // 만약 stages의 값이 i+1(게임은 1단계부터 시작하기 때문에)보다
      // 크거나 같다면 도달 했었다는 의미이기 때문에 m[i]의 값을 올려준다.
      if (stages[j] >= i + 1) m[i]++;

      // 만약 stages의 값이 i+1과 같다면
      // 아직 클리어를 못했다는 의미이기 때문에 m[i+N]의 값을 올려준다.(실패율 의미)
      if (stages[j] == i + 1) m[i + N]++;
    }
    //  (3) answer[i]에 각각 단계와, 실패율을 저장한다.
    answer[i] = [i + 1, m[i + N] / m[i]];
    //  (4) 실패율을 기준으로 내림차순으로 정렬한다,
    answer.sort(function (a, b) {
      return b[1] < a[1] ? -1 : b[1] > a[1] ? 1 : 0;
    });
  }
  //  (5) index 배열에 (4)번에서 정렬됐던 게임의 단계만 저장한다,
  for (var i = 0; i < N; i++) index[i] = answer[i][0];
  return index;
}

// 이해 안됨. 나중에 다시 풀어보자.

// 다른 사람의 풀이
function solution(N, stages) {
  let records = [];
  let i;
  for (i = 0; i < N + 1; i++) records.push([0, 0, i + 1]); //수, 실패율, 스테이지
  stages.forEach((num) => records[num - 1][0]++);
  let ppl = 0;
  for (i = 0; i < N + 1; i++) {
    records[i][1] = records[i][0] / (stages.length - ppl);
    ppl += records[i][0];
  }
  return records
    .slice(0, N)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[2]);
}
