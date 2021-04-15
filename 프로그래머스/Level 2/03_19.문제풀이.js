// 1. 짝지어 제거하기

function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length ? 0 : 1;
}

let s = "baabaa";
solution(s);

// 100만개라서 효율성에 문제가 있다.
// i를 계속 0으로 초기화 시키고 제거하고 반복하면
// 스택을 사용하면?
// 크레인 인형뽑기 했던 것처럼

// stack.length를 이용해 return 했더니
// 시간초과 되서 stack.length가 있는지 없는지만 판단하게 하였다.

// 2. N개의 최소공배수

// 혼자 못 풀었다.

//여러수의 최소공배수는
// 앞에서부터 두개의 수를 최소공배수로 리턴하는 방식으로 구할 수 있다.
// [2,6,8,14] => [6, 8, 14] => [24, 14] => [168]
function solution(arr) {
  // 최대공약수
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  return arr.sort().reduce((a, b) => (a * b) / gcd(a, b));
}

// sort를 쓰는 이유: gcd 연산 중 (작은 값 / 큰 값)으로 나누는 경우의 입력을 방지하기 위함

// 다시 풀기

// 3. 예상 대진표

const solution = (n, a, b) => {
  // i, i+1 이렇게 되는 경우를 구하시오.

  let answer = 0;

  while (a !== b) {
    n /= 2;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
};

// 테스트 케이스 (a < b)
solution(8, 1, 2); // 예외 1: b가 바로 옆에 있는 경우 1(현재 대진에 바로 만남)
solution(8, 2, 3); // 예외 2: b가 바로 옆에 있는 경우 2(그러나 다음 대진에 만남)
solution(8, 4, 7); // 일반적인, 떨어져 있는 케이스

// Math.abs(a-b)는 왜 안돼..?

// 4. 영어 끝말잇기

function solution(n, words) {
  let dup = 0; // 중복지점
  let stupid = 0; // 걸린 사람
  let order = 0; // 몇번째 차례인지 구하려고

  for (let i = 0; i < words.length; i++) {
    let subArr = words.slice(0, i);

    // 탈락조건 1 (끝이 다른 글자를 말했을 때)
    if (words[i - 1].substring(words[i - 1].length - 1) !== words[i][0]) {
      dup = i;
      break;
    }

    // 탈락조건 2 (말했던 단어 또 말했을 때 = 중복일 때)
    if (words.indexOf(words[i]) !== words.lastIndexOf(words[i])) {
      dup = words.lastIndexOf(words[i]); // 이게 인덱스를 찾아주니까

      break;
    }
  }
  stupid = (dup % n) + 1;
  order = Math.ceil(dup + 1 / n);
  return [stupid, order];
}

// 답은 [stupid, count] 형식으로 나와야 한다.
// 탈락조건 2(나온 단어 또 말했을 때)
// 1. 그니까 중복되는 요소가 있을 때를 구하고
// 2. 그게 몇번째 사람인지 구하고
// 3. 그게 몇번째 배열에서 탈락하는지 구한다.

// 탈락조건 1(끝 글자랑 첫번째 글자랑 다른 경우)
// words[i][j.length -1] !== words[i+1][0]

// 그 외의 조건은 성공, 그럴 떈 [0, 0]을 return 한다.

// 거의 다 푼 것 같은데.. 나중에 다시 하자.
