// 1. [1차] 다트게임

//	1S2D*3T => 1^1 * 2 + 2^2 * 2 + 3^3

function solution(dartResult) {
  // 혼자 못 풀었다. 풀이 보고 이해해보자.

  let point;
  let answer = [];

  let arr = dartResult.split('');

  // 1. 다트 숫자가 10인 경우와 아닌 경우로 분리한다.
  // 10인 경우는 index를 하나 더 늘려서 검사해야 하기 때문이다.

  for (let i = 0; i < arr.length; i++) {
    // 10일 경우
    if (arr[i] === '1' && arr[i + 1] === '0') {
      point = 10;
      i++;
      // 9일경우
    } else {
      point = Number(arr[i]);
    }

    // 보너스가 D면 제곱, T면 세제곱을 한다.

    // 보너스(S,D,T 정의)

    // D면 제곱
    if (arr[i] === 'D') {
      point *= point;
    }

    // T면 세제곱
    if (arr[i] === 'T') {
      point *= point * point;
    }

    // 옵션이 *면 2를 곱하고 이전 값이 존재하면 그 값도 2를 곱한다.

    if (arr[i] === '*') {
    }
  }

  // 2.
}

// 1. 다트게임 (다시)

// 1) 코드 설명

//  (1) for문을 이용해 dartResult의 길이만큼 각 character를 검사하도록 한다.

//  (2) 검사하려는 character가 0~9 사이의 숫자일 경우 다음 숫자가 0인지 한번 더 검사한다(10인지 확인하기 위해서)

//  (3) 10인 경우 temp에 10을 저장한 뒤 i를 높여준다(0 부분을 건너뛰기 위해서)

//  (4) 0이 아닌경우 해당 숫자를 그대로 temp에 저장한다.

//  (5) 숫자가 아닌 'S', 'D', 'T'인 경우 해당 값을 answer에 push한다.

//  (6) '#'일 경우 직전 값에 -1을 곱해준다.

//  (7) '*'일 경우 직전 값과 그 전 값을 2배로 만들어야 하기 때문에 해당 값에 2를 곱해준다.

//  (8) answer에 push 됐던 값들을 숫자형으로 변환해서 모두 더해준다.

// 2) 코드

function solution(dartResult) {
  var num = 0;
  var answer = [];
  var temp = 0;
  for (var i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    } else if (dartResult[i] === 'S') {
      answer.push(temp);
    } else if (dartResult[i] === 'D') {
      answer.push(Math.pow(temp, 2));
    } else if (dartResult[i] === 'T') {
      answer.push(Math.pow(temp, 3));
    } else if (dartResult[i] == '#') {
      // 아차상
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] == '*') {
      // 스타상
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  for (var i = 0; i < answer.length; i++) {
    num += Number(answer[i]);
  }
  return num;
}

// 이해가 됐다!

// 2. 비밀지도

// 이해를 못했다. 다시 풀자.

// 1) 코드 설명

//  (1) n만큼의 길이를 가지는 배열 answer를 만든다.

//  (2) n만큼의 길이를 맞추기 위해서 "000000000"를 추가해준 뒤 slice 해준다.

// (3) for문을 이용해서 arr1의 값과 arr2의 값이 둘 다 0일 경우 공백을 answer에 삽입하고,

//  아닐 경우 '#'을 삽입한다.

// 2) 코드

function solution(n, arr1, arr2) {
  // n만큼의 길이를 가지는 배열을 만드는 방법?
  var answer = Array.from({ length: n }, () => '');
  for (var i = 0; i < n; i++) {
    // 10진수 -> 2진수 변환
    arr1[i] = arr1[i].toString(2);
    // 000000000을 추가하는 이유는?
    arr1[i] = '000000000' + arr1[i];
    // slice(-n)?
    arr1[i] = arr1[i].slice(-n);
    arr2[i] = arr2[i].toString(2);
    arr2[i] = '000000000' + arr2[i];
    arr2[i] = arr2[i].slice(-n);
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (arr1[i].charAt(j) == 0 && arr2[i].charAt(j) == 0) {
        answer[i] += ' ';
      } else answer[i] += '#';
    }
  }
  return answer;
}

// 이해를 못했다. 다음에 다시 풀자.
