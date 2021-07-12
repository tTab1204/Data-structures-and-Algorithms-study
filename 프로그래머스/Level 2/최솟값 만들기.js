function solution(A, B) {
  let mul = 0;
  let answer = 0;

  while (B.length > 0) {
    // A 배열의 최솟값
    let minA = Math.min.apply(null, A);
    // B 배열의 최댓값 설정
    let maxB = Math.max.apply(null, B);
    // A의 최솟값 * B의 최댓값을 구하고, 얘네를 각 배열에서 제거
    // A의 최솟값 * B의 최댓값... 반복..
    mul = minA * maxB;

    answer += mul;

    let minAindex = A.indexOf(minA);
    let maxBindex = B.indexOf(maxB);

    A.splice(minAindex, 1); // A의 현재 최솟값을 제거
    B.splice(maxBindex, 1); // B의 현재 최댓값을 제거
  }
  return answer;
}

// 다른 사람의 풀이

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

// reduce() 이렇게도 사용 가능한가?
