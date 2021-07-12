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
