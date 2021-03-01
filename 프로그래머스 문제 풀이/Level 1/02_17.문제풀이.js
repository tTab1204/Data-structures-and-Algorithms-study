// 1. [1차] 다트게임

//	1S2D*3T => 1^1 * 2 + 2^2 * 2 + 3^3

function solution(dartResult) {
  // 혼자 못 풀었다. 풀이 보고 이해해보자.

  let point;
  let answer = [];

  let arr = dartResult.split("");

  // 1. 다트 숫자가 10인 경우와 아닌 경우로 분리한다.
  // 10인 경우는 index를 하나 더 늘려서 검사해야 하기 때문이다.

  for (let i = 0; i < arr.length; i++) {
    // 10일 경우
    if (arr[i] === "1" && arr[i + 1] === "0") {
      point = 10;
      i++;
      // 9일경우
    } else {
      point = Number(arr[i]);
    }

    // 보너스가 D면 제곱, T면 세제곱을 한다.

    // 보너스(S,D,T 정의)

    // D면 제곱
    if (arr[i] === "D") {
      point *= point;
    }

    // T면 세제곱
    if (arr[i] === "T") {
      point *= point * point;
    }

    // 옵션이 *면 2를 곱하고 이전 값이 존재하면 그 값도 2를 곱한다.

    if (arr[i] === "*") {
    }
  }

  // 2.
}

// 이해가 어렵다. 나중에 다시 풀어보자.
