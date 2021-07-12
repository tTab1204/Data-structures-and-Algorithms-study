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
