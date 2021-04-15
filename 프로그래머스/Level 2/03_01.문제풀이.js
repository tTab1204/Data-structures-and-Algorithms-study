// 1. 프린터
function solution(priorities, location) {
  let first_doc = 0;

  let answer = 1;

  while (priorities.length > 0) {
    // 1. 가장 앞에 있는 문서를 꺼내온다.
    first_doc = priorities.shift();

    // 2. 우선순위를 비교했는데 더 높은 우선순위의 문서가 있는 경우 뒤로 넣는다.
    if (priorities.some((value, index) => value > first_doc)) {
      priorities.push(first_doc);
    } else {
      // 3. 사용자가 선택한 문서가
      // 첫 문서인데 가장 높은 우선 순위일 경우
      if (location === 0) {
        break;
      }
      // !! 사용자가 선택한 문서가
      // 첫 문서가 아닌데 가장 높은 우선순위일 경우
      else {
        answer++;
      }
    }

    // 4. 사용자가 선택한 문서의 인덱스가 0일때
    // 중요도가 제일 높은게 아닌 경우
    // 현재 대기목록의 맨 끝으로 index를 옮긴다.
    if (location === 0) {
      location = priorities.length - 1;
    }
    // location이 0이 아닐 때
    else {
      location--;
    }
  }
  return answer;
}

// 어렵다.. 근데 이해 됐다

// 다른 사람의 풀이
function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.shift();
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
// 어떻게 이렇게 짧냐
// 이건 이해가 잘 안됨

// 2. 124 나라의 숫자

// 혼자 못 풀었다.
// 진법 변환 이해해보자.

// 1, 2, 4. 총 3개의 숫자가 순환하면서 나타난다.

// 3으로 나눴을 때 나머지가 1이면 "1", 2이면 "2", 나누어 떨어지면 "4"가 나타난다.

// 규칙을 찾으면 된다.ㄴ
function solution(n) {
  let answer = "";

  while (n > 0) {
    switch (n % 3) {
      case 1:
        answer = "1" + answer;
        n = Math.floor(n / 3);
        break;
      case 2:
        answer = "2" + answer;
        n = Math.floor(n / 3);
        break;
      case 0:
        answer = "4" + answer;
        n = n / 3 - 1;
        break;
    }
  }

  return answer;
}

// 집 가서 한번 더 보기

// 다른 사람의 풀이
function change124(n) {
  var answer = "";
  var array1_2_4 = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2

  while (n) {
    answer = array1_2_4[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}

// 이해가 힘들다. 다시 보기.

// 3. 올바른 괄호
function solution(s) {
  if (s[s.length - 1] != ")") return false;

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? sum++ : sum--;

    // 이 조건을 생각을 못했다. 어려웠다.
    // 순차적으로 탐색할 때, "(" 갯수를 ")"가 넘어서는 안된다.
    if (sum < 0) return false;
  }

  return sum === 0 ? true : false;
}

// 4. 행렬의 곱셈

function solution(arr1, arr2) {
  var answer = [];

  for (var i = 0; i < arr1.length; i++) {
    var temp = [];
    for (var j = 0; j < arr2[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < arr1[i].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
    }

    answer.push(temp);
  }

  return answer;
}

// 반복문 3개 겹치니까 헷갈린다. 잘 모르겠다.
// 집 가서 다시 !

// 5. 위장
