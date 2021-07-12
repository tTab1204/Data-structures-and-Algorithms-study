// 3. 소수 찾기 (해결 X)

// 내가 푼 방법 (타임아웃..)
const solution = (n) => {
  let result = [];
  let PrimeNumber = 0;
  // 1과 자신을 제외한 정수 중에 나눠지는 정수가 있는지 체크

  for (let i = 1; i <= n; i++) {
    PrimeNumber = 1;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        PrimeNumber = 0;
      }
    }
    if (PrimeNumber) {
      result.push(i);
    }
  }

  return result.length - 1;
};

// 다른 사람이 푼 방법 (Set + 에라토스테네스의 체 이용)
// Set의 유일성이라는 부분을 이용
function useSet(n) {
  const set = new Set();

  for (let i = 2; i <= n; i++) {
    set.add(i);
  }
  for (let i = 2; i <= n; i++) {
    // 각 수의 배수를 찾는 반복문..
    // 이런 식으로 반복문을 구현할 수도 있다는 걸 생각하자.
    for (let j = 2 * i; j <= n; j = j + i) {
      set.delete(j);
    }
  }
  return set;
}

function solution(n) {
  let count = useSet(n).size;
  return count;
}
// https://taesung1993.tistory.com/14 (순열,재귀)
// 근데 이것도.. 효율성이 안 좋게 나온다. 어떻게 해결해야 할까

const solution = (n) => {
  // 1과 자신을 제외한 정수 중에 나눠지는 정수가 없는지?있는지? 체크
  // 완전탐색 아닌가
  // 아닌가
  // 시간 복잡도가 O(N)이하여야 하나?
  // 반복문 두개를 쓰면 안되나?
  // 그런가보다
  // 반복문ㅁ 두개를 안 쓸 수가 있나..?
  // 에라토스테네스의 체
  // 1을 제외하고 2부터 순차적으로 N까지 자신을 제외하고
  // 자신의 배수들을 차례대로 지워가면 결국에는 소수들만 남는다는 원리이다.

  let arr = [];

  let answer = 0;

  for (let i = 2; i <= n; i++) {
    arr.push(i);
    if (arr[i] === 0) continue;
    // 배수 검사?
    // 이 부분을 모르겠다.
    for (let j = i + i; j <= n; j = j + i) {
      arr[j] = 0;
    }
    if (arr[i] !== 0) answer++;
  }
  return answer;
};

// 다른 사람의 풀이 1
function numberOfPrime(n) {
  var result = 0;
  // 함수를 완성하세요.
  var cnt = 0;
  for (var a = 2; a <= n; a++) {
    cnt = 0;
    for (var b = 1; b <= a; b++) {
      if (a % b == 0) cnt++;
    }
    if (cnt == 2) result++;
  }
  return result;
}
// 와
// 어 이거 안되네

// 다른 사람의 풀이 2
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

// 5. 최대공약수와 최대공배수
function solution(a, b) {
  const gcd = (a, b) => {
    if (a % b === 0) return b;
    return gcd(b, a % b);
  };
  const lcd = (a, b) => (a * b) / gcd(a, b);

  return [gcd(a, b), lcd(a, b)];
}
// 최대공약수는 유클리드 호제법을 이용해서 최대공약수를 구하고

// 유클리드 호제법
// a,b 를 서로를 나눈다. 만약 나누어진다면 b가 최대공약수이다.(a > b이다.)
// 만약 서로가 나누어지지 않는다면 b와 a % b(a를 b로 나눈 나머지) 다시 나눈다.
// 서로가 나누어진다면 a % b가 최대공약수이다.
// 만약 나누어지지 않는다면 다시 위 방법을 반복한다.
// 최소공배수는 두 수의 곱을 최대공약수로 나누어서 구한다.

// 유클리드 호제법, 재귀함수 잘 기억하기.

// 다른 사람의 풀이
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
// ?????????????????????????

// 6. 소수 만들기

// 1. 주어진 nums 배열의 원소 3개를 골라 구할 수 있는 모든 합을 구한다.
// 2. 이를 temp 배열에 넣는다.
// 3. temp 원소가 소수인지 아닌지 판별하는 함수를 만든다.

// 어떤 정수가 소수인지 판별하는 방법은 그 소수의 제곱근까지 나누어 보는 것이다!!!

// 4. 만약 소수라면, count++ 하여 count를 반환한다.
// ※ 소수가 없다면 0을 반환한다.
function solution(nums) {
  let temp = [];
  let count = 0;
  // 주어진 nums 배열의 원소 3개를 골라 구할 수 있는 모든 합을 구한다.
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[k] + nums[j];
        temp.push(sum);
      }
    }
  }

  const primeNumber = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let l = 0; l < temp.length; l++) {
    if (primeNumber(temp[l])) count++;
  }
  return count;
}

// 혼자 못 풀었다!! 다시 보기
