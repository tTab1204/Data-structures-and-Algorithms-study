// 1. 조이스틱

function solution(name) {
  let answer = 0;

  // 조이스틱을 왼쪽으로 1번 조작 ()

  return answer;
}

// 풀이 봐도 아직은 잘 모르겠다.

// 2. 큰 수 만들기

// 혼자 못 풀었다.

// 스택을 만들어서 풀어보기
function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    // 가장 끝에 넣은 수가 이전에 넣은 수(number[i])보다 작으면
    // stack.pop()을 한다.
    // 그와 동시에 k를 1씩 빼준다.
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  // k가 0일 경우 스택은 그대로,
  // but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)

  // 아직도 이 부분이 이해가 잘 안된다.. splice함수 사용이랑
  // 이 부분 다시 이해해보기
  stack.splice(stack.length - k, k);
  return stack.join("");
}

let number = "987654321";
k = 8;

solution(number, k);

// 나중에 꼭 다시 풀어보기. 이해 할만하다.
