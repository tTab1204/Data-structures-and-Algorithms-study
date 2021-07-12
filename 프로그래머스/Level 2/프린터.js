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
