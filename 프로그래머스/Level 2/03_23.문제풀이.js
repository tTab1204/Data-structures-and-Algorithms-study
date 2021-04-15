// 1. 큰 수 만들기

// 저번에 봤던 풀이
function solution(number, k) {
  var stack = []; // b : 최종 글자들이 저장될 스택 (숫자가 큰!)

  // 왜 반복문을 겹쳐쓰지?
  // 하나만 쓸 수는 없나?ㄴ
  for (var i = 0; i < number.length; i++) {
    // 모든 숫자 비교
    var now = number[i]; // 현재 인덱스 숫자. 처음에는 그냥 push

    // 무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서
    // 재인덱스가 이전인덱스보다 크면 pop하고 넣어줌. 제거하는 숫자인 (k)를 1 감소
    // 제거할 숫자를 다 채웠으면 그냥 넣음
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  // k가 0일 경우 스택은 그대로 return
  // but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)
  // splice(start, deleteCount)
  // stack.splice(stack.length - k, k);

  // 이런 생각을 어떻게 했는지.. 지금은 이 코드가 이해가 됐다.
  stack.splice(stack.length - k, k);
  return stack.join("");
}

number = "999";
k = 2;

// 2. 멀쩡한 사각형
// 먼저 유클리드 호제법 코드로 구현하는 것 정확히 이해해보기

// 2. 멀쩡한 사각형
const solution = (w, h) => {
  // 유클리드 호제법을 이용한 최대 공약수 구하기
  function gcd(w, h) {
    // 처음 W와 H를 받습니다.

    // W와 H의 나머지를 구합니다.
    const r = w % h;

    // 만약 나머지가 0일 경우 H를 반환합니다.
    if (r === 0) {
      return h;
    }

    // 만약 0이 아닐경우 W에 H를 넣고 H에 나머지인 r을 넣어 해당 함수를 다시 호출해 줍니다.
    return gcd(h, r);
  }
  return w * h - (w + h - gcd(w, h));
};

// 3. 카펫
const solution = (brown, yellow) => {
  // brown * yellow = 넓이
  // yellow의 길이 = brown - 2
  let sum = brown + yellow;
  let width = 0;
  let height = 0;

  for (let i = Math.floor(sum / 2); i > 0; i--) {
    if (sum % i !== 0) continue;
    width = i;
    height = sum / i;
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
};

// 다른 사람의 풀이
function solution(brown, red) {
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }

  return [x, i];
}

// 4. JadenCase 문자열 만들기

const solution = (s) => {
  // 한 글자 단위로 다 나누기
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === " ") arr[i] = arr[i].toUpperCase();
    else arr[i] = arr[i].toLowerCase();
  }
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
};

// 5. N개의 최소공배수
const solution = (num) => {
  const gcd = (a, b) => {
    let r = a % b;
    return r ? gcd(b, r) : b;
  };
  // 여러수의 최소공배수는 앞에서부터 두개의 수를
  // 최소공배수로 리턴하는 방식으로 구할 수 있다.
  // (a * b) / gcd(a, b) = 두수의 곱 / 최대공약수 = 최소공배수이기 때문
  return num.reduce((a, b) => (a * b) / gcd(a, b));
};
