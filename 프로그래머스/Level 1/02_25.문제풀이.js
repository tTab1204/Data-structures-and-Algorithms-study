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
    } else if (dartResult[i] === "S") {
      answer.push(temp);
    } else if (dartResult[i] === "D") {
      answer.push(Math.pow(temp, 2));
    } else if (dartResult[i] === "T") {
      answer.push(Math.pow(temp, 3));
    } else if (dartResult[i] == "#") {
      // 아차상
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] == "*") {
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
  var answer = Array.from({ length: n }, () => "");
  for (var i = 0; i < n; i++) {
    // 10진수 -> 2진수 변환
    arr1[i] = arr1[i].toString(2);
    // 000000000을 추가하는 이유는?
    arr1[i] = "000000000" + arr1[i];
    // slice(-n)?
    arr1[i] = arr1[i].slice(-n);
    arr2[i] = arr2[i].toString(2);
    arr2[i] = "000000000" + arr2[i];
    arr2[i] = arr2[i].slice(-n);
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (arr1[i].charAt(j) == 0 && arr2[i].charAt(j) == 0) {
        answer[i] += " ";
      } else answer[i] += "#";
    }
  }
  return answer;
}

// 이해를 못했다. 다음에 다시 풀자.

// 3. 실패율

// 문제 풀이

// 1) 코드 설명

//  (1) 0을 N*2 길이 만큼 넣은 배열 m을 선언한다,

//  (2) 이중 for문을 이용해서 stages 배열을 검사한다.

//  만약 stages의 값이 i+1(게임은 1단계부터 시작하기 때문에)보다 크거나 같다면 도달 했었다는 의미이기 때문에 m[i]의 값을 올려준다.

//  만약 stages의 값이 i+1과 같다면 아직 클리어를 못했다는 의미이기 때문에 m[i+N]의 값을 올려준다.(실패율 의미)

//  (3) answer[i]에 각각 단계와, 실패율을 저장한다.

//  (4) 실패율을 기준으로 내림차순으로 정렬한다,

//  (5) index 배열에 (4)번에서 정렬됐던 게임의 단계만 저장한다,

// 2) 코드

function solution(N, stages) {
  var m = Array.from({ length: N * 2 }, () => 0);
  var answer = [];
  var index = [];
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < stages.length; j++) {
      if (stages[j] >= i + 1) m[i]++;
      if (stages[j] == i + 1) m[i + N]++;
    }
    answer[i] = [i + 1, m[i + N] / m[i]];
    answer.sort(function (a, b) {
      return b[1] < a[1] ? -1 : b[1] > a[1] ? 1 : 0;
    });
  }
  for (var i = 0; i < N; i++) index[i] = answer[i][0];
  return index;
}

// 이해 못했다. 다음에 다시 풀자.
