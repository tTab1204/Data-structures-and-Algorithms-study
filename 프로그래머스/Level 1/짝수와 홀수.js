// 내가 푼 방법
function solution(num) {
  if (num % 2 === 1 || num % 2 === -1) {
    return 'Odd';
  } else {
    return 'Even';
  }
}
// 음수도 들어갈 수 있다!!

function evenOrOdd(num) {
  return num % 2 ? 'Odd' : 'Even';
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
