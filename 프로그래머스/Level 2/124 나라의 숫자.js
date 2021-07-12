// 혼자 못 풀었다.
// 진법 변환 이해해보자.

// 1, 2, 4. 총 3개의 숫자가 순환하면서 나타난다.

// 3으로 나눴을 때 나머지가 1이면 "1", 2이면 "2", 나누어 떨어지면 "4"가 나타난다.

// 규칙을 찾으면 된다.ㄴ
function solution(n) {
  let answer = '';

  while (n > 0) {
    switch (n % 3) {
      case 1:
        answer = '1' + answer;
        n = Math.floor(n / 3);
        break;
      case 2:
        answer = '2' + answer;
        n = Math.floor(n / 3);
        break;
      case 0:
        answer = '4' + answer;
        n = n / 3 - 1;
        break;
    }
  }

  return answer;
}

// 집 가서 한번 더 보기

// 다른 사람의 풀이
function change124(n) {
  var answer = '';
  var array1_2_4 = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2

  while (n) {
    answer = array1_2_4[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}

// 이해가 힘들다. 다시 보기.
