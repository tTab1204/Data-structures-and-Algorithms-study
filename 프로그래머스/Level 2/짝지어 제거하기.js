function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length ? 0 : 1;
}

let s = 'baabaa';
solution(s);

// 100만개라서 효율성에 문제가 있다.
// i를 계속 0으로 초기화 시키고 제거하고 반복하면
// 스택을 사용하면?
// 크레인 인형뽑기 했던 것처럼

// stack.length를 이용해 return 했더니
// 시간초과 되서 stack.length가 있는지 없는지만 판단하게 하였다.
