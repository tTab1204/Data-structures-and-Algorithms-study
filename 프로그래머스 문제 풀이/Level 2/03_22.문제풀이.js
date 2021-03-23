// 1. 프린터

// 혼자 못 풀었다.

// 다른 사람의 풀이

function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my_doc: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var first_doc = list.shift();

    // 첫번째 문서보다 우선순위가 더 큰 문서가 있는 경우
    if (list.some((item) => item.val > first_doc.val)) {
      // 해당 문서는 아직 인쇄하지 못하기 때문에 뒤로 보내준다.
      list.push(first_doc);
    }

    // 첫번째 문서가 가장 우선순위가 큰 경우
    else {
      count++;
      // 만약 first_doc이 my_doc이라면 count를 return 한다.
      if (first_doc.my_doc) return count;
    }
  }
}

// 이해 됐다.. 근데 다음에 다시 풀어보기
// 굳이 location을 조작할 필요가 없다.

// 다른 사람의 풀이2
function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}

// 인쇄 순서를 나타낸 배열을 queue로 지정해줘서, 나에겐 보다 직관적이고 이해하기 쉬웠다.

// 2. 다음 큰 숫자

const solution = (n) => {
  let strN = n.toString(2);
  let answer = n + 1;

  // n의 1의 갯수 세기
  let countOne = strN.split("").filter((value) => value === "1").length;

  while (true) {
    let strA = answer.toString(2);
    let countONe2 = strA.split("").filter((value) => value === "1").length;
    if (countOne === countONe2) break;
    answer++;
  }
  return answer;
};

// 3. 최댓값과 최솟값
const solution = (s) => {
  let arr = s.split(" ").sort((a, b) => a - b);

  let min = arr.shift();
  let max = arr.pop();

  return `${min} ${max}`;
};

// 4. 올바른 괄호
const solution = (s) => {
  // '('= 1
  // ')'= -1
  // 이라고 했을 때,
  // 조건 1: sum은 한번이라도 -1이 될 수 없다.
  // 조건 2: 또한, sum = 0이 되어야 한다.

  let sum = 0;

  if (s[0] !== "(") return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") sum++;
    else if (s[i] === ")") sum--;

    if (sum < 0) return false;
  }
  return sum === 0 ? true : false;
};

// 5. 큰 수 만들기
const solution = (number, k) => {
  let stack = [];
  number = number.split("");

  // 반복문을 돌면서

  // 1. 만약 stack[stack.length - 1]이 first_item보다 작다면
  // stack.pop() 해주고
  // stack.pop() 할 때마다 count++;
  // first_item은 stack에 그대로 push해준다.

  // 2. 반대로 stack[stack.length - 1]이 더 크다면
  // 그대로 stack.push() 해준다.

  while (k > 0) {
    let first_item = number.shift();

    if (stack[stack.length - 1] < first_item) {
      stack.pop();
      k--;
    }
    stack.push(first_item);
  }

  if (k === 0) {
    for (let i = 0; i < number.length; i++) stack.push(number[i]);
  }

  return stack.join("");
};

number = "0101010";
k = 5;
solution(number, k);

// 또 혼자 못 풀었다.
// 다시 이해하고 다시 풀어보자.
// 내일 다시 ㄱㄱ
