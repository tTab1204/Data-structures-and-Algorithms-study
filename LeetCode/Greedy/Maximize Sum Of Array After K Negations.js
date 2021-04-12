// 그리디 알고리즘: 매 순간 최적의 답을 찾는다.

// 시간 복잡도는.. O(N^2)이지 않을까?
// [4,3,2] 일 경우  k = 1

var largestSumAfterKNegations = function (A, k) {
  A.sort((a, b) => b - a);

  for (let i = A.length - 1; i > 0; i--) {
    if (k === 0) break;

    // 음수는 찾을때마다 양수로 바꿔주고
    if (A[i] < 0) {
      A[i] = A[i] * -1;
      k--;
    }

    // 모든 요소가 양수인데 k가 0이 아닌 경우
    // 음수를 모두 바꾸고도 k가 남아있다면
    // 가장 최소인 숫자를 찾아서 그 녀석을 한 번만 바꿔주면 됩니다.
  }
  A.sort((a, b) => a - b);

  if (k > 0 && k % 2 === 1) A[0] = A[0] * -1;

  let answer = A.reduce((a, c) => a + c);
  return answer;
};

A = [4, 2, 3];
K = 1;

largestSumAfterKNegations(A, K);

// 다른 사람의 풀이

const largestSumAfterKNegations = (A, K) => {
  A.sort((a, b) => a - b);
  for (let i = 0; K > 0 && i < A.length && A[i] < 0; ++i, --K) {
    A[i] = -A[i]; // 음수를 양수로 바꾸기
  }
  let min = Math.min(...A);
  let sum = A.reduce((a, c) => a + c);
  return sum - (K % 2) * min * 2; // 이미 reduce()로 다 더해버렸으니 *2를 해서 빼준다.
};
// 이해했다.

// 이거 가독성이 좀..
// Javascript 빠른 방법 (반복문 배열 도는 것을 최소화함)
const largestSumAfterKNegations = (A, K) => {
  // 정렬
  A.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let val = A[i];
    if (0 < K) {
      // K가 양수일 때
      if (val < 0) {
        let next = A[i + 1];
        // 절댓값이 next보다 작고 k는 짝수다
        // [1,2,3,4,5] -> 조건에 걸리며 K=0 되면서 끝
        // [-4,-3,1,2,3] -> else로
        if (Math.abs(val) < next && 0 === K % 2) K = 0;
        // 이게 뭔 소리야
        // val = 요소들을 전부 양수로 바꾸고
        // K-1을 해준다고? 반복문 도니까? 근데 배열은 왜 씌운거야
        else [val, K] = [-val, K - 1];
      }
      // K가 홀수인데 K가 남은 경우를 말한다.
      else if (0 !== val && 1 === K % 2) [val, K] = [-val, 0];
      else K = 0;
    }
    sum += val;
  }
  return sum;
};

// 나중에 읽어보자..
