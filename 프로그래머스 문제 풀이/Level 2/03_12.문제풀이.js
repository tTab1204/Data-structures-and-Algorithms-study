// 1. 핸드폰 번호 가리기
const solution = (phoneNumber) => {
  let answer = "";

  // 1. 반복해서 돌리다가
  for (let i = 0; i < phoneNumber.length; i++) {
    // 2. 총 길이에서 -4만큼 뺀 값을 *로 채운다.
    if (i < phoneNumber.length - 4) {
      answer += "*";
    } else {
      // 3. 나머지 번호는 그대로
      answer += phoneNumber[i];
    }
  }
  return answer;
};

// 다른 사람의 풀이
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);

  return result;
}

// 2. 서울에서 김서방 찾기
const solution = (seoul) => {
  let location = 0;

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") location = i;
  }
  let result = `김서방은 ${location}에 있다`;
  return result;
};

// 다른 사람의 풀이
function findKim(seoul) {
  var idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}

// 3. 폰켓몬

// 가질 수 있는 폰켓몬 종류 수의 최댓값 구하기

function solution(nums) {
  // 1. nums 배열에서 중복을 없애고
  // set을 Array로 변환하기 위해 전개 연산자 사용함.
  // console.log([...mySet]);
  const phoneketmon = new Set(nums);
  // 2. 그 길이 구하면 되는거 아님?
  if ([...phoneketmon].length > nums.length / 2) return nums.length / 2;
  else return [...phoneketmon].length;
}

// 다른 사람의 풀이
function solution(nums) {
  const noDuplicatePokemon = new Set(nums);
  const pokemonVarietyCount = noDuplicatePokemon.size;
  const pokemonCounts = nums.length;
  return pokemonVarietyCount > pokemonCounts / 2
    ? pokemonCounts / 2
    : pokemonVarietyCount;
}
// 객체길이..size가 있었지..맞다..

// 4. 소수찾기
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
