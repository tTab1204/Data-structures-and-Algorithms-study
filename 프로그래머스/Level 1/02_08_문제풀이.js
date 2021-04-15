// 1. 모의고사 (완전탐색)

function solution(answers) {
  // 1번 수포자
  const arr1 = [1, 2, 3, 4, 5];
  // 2번 수포자
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  // 3번 수포자
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];

  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === arr1[i % 5]) {
      count[0]++;
    }
    if (answers[i] === arr2[i % 8]) {
      count[1]++;
    }
    if (answers[i] === arr3[i % 10]) {
      count[2]++;
    }
  }

  const max = Math.max(...count);
  for (let j = 0; j < count.length; j++) {
    if (count[j] === max) {
      result.push(j + 1);
    }
  }
  return result;
}

// 배열 중 가장 큰 요소를 얻는 방법(MDN)
// var arr = [1, 2, 3];
// var max = Math.max(...arr);

// 다른 사람의 풀이
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % 5]).length;
  var a2c = answers.filter((a, i) => a === a2[i % 8]).length;
  var a3c = answers.filter((a, i) => a === a3[i % 10]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

// filter 메소드 사용.

// -------------------------------------------------------------------------------- //

// 2. 체육복 (그리디)

// 학생에게 체육복을 1개 준다.
// 만약 이 학생이 체육복을 도둑 맞았다면 1을 뺀다.
// 만약 이 학생이 체육복을 2개 가지고 왔다면 1을 더한다. 이렇게 하면 각 index의 학생들이 현재 가지고 있는 체육복의 갯수를 얻을 수 있다. 반복을 했다. 나(i번째 index)에게 체육복이 없다면, 앞이나 뒤에서 빌려야 한다.
// 앞이나 뒤에 체육복이 2가 있다면 둘중 한명에게만 빌리면 된다.
// 순서는 앞에 있는 학생에게 먼저 빌려보고, 없으면 뒤에서 빌리는 것이다.
// 만약 앞에 있는 학생이 체육복을 2개 가지고 있다면 2개 가진 학생의 앞에 있는 학생은 체육복을 도둑맞지 않았던가 그 앞에 있는 학생에게 빌렸다는 것이다.
// 만약, 뒤에서 빌린다면, 그뒤에 학생들이 다 도둑맞았다고 했을때, 내뒤의 학생은 그 다음 학생에게 빌려 줄수 없게 된다.
// 내가(i번째 index)가 0이고, 앞의 혹은 뒤에 체육복을 2개 가지고 있는 학생이 있어야 한다.
// 앞에서 빌리면 앞 index에서 -1, 내 index에서 +1
// 뒤에서 빌리면 뒤 index에서 -1, 내 index에서 +1
// 이렇게 학생 수 만큼 반복하면 된다.

// 방법 1
function solution(n, lost, reserve) {
  var answer = 0;
  let setArr = [];
  // 학생 번호는 1부터 시작하기 때문에(0이 아니다!)
  for (let i = 1; i <= n; i++) {
    setArr.push(1); //우선 체육복을 1개 준다.
    if (reserve.includes(i)) {
      // 체육복을 2개 가지고온 학생이라면
      // includes() 메소드는 배열이 특정 요소를 포함하고 식별한다.
      setArr[i - 1]++; // 1개 추가한다. 주의!! - 학생번호와 index는 다르다.
    }
    if (lost.includes(i)) {
      // 체육복을 도둑 맞은 학생이라면
      setArr[i - 1]--; // 1개를 뺀다.  주의!! - 학생번호와 index는 다르다.
    }
  }

  // -------------------------------------------------------------------------------- //

  for (let i = 0; i < n; i++) {
    if (!setArr[i]) {
      // i번지의 학생이 체육복이 없다면?
      // 0은 falsy 한 값이기 때문에 !를 붙여주면 truthy한 값이 된다. (setArr[i]===0) 과 같다.
      if (setArr[i - 1] === 2) {
        // 앞에 있는 학생이 체육복을 2개 가지고 있다면
        setArr[i]++; // 없는애꺼(내꺼) 하나 플러스
        setArr[i - 1]--; // 앞에 학생 하나 마이너스
      } else if (setArr[i + 1] === 2) {
        // 뒤에 있는 학생이 체육복을 2개 가지고 있다면
        setArr[i]++; // 없는애꺼(내꺼) 하나 플러스
        setArr[i + 1]--; // 뒤에 있는 학생 하나 마이너스
      }
    }
  }
  for (let i = 0; i < n; i++) {
    // 체육복이 한개 이상인 학생들을 answer에 추가한다.
    if (setArr[i] >= 1) {
      answer++;
    }
  }
  console.log(setArr);
  return answer;
}

// 스스로 못 풀었다. 이 방법 이해해보자.
// 이해가 잘 되니까 다시 풀어보기.

// 다른 방법

function solution(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
}

// 와..짧다.. 근데 이해가 잘 안된다..

// 3. 크레인 인형뽑기 게임

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
// 계속 공부하다보면 되나?
