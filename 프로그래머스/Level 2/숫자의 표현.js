function solution(num) {
  var answer = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}

// 어떻게 푼지 모르겠다.

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
