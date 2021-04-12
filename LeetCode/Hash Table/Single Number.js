// 해시를 이용해 풀려고 했는데.. 혼자 못 풀었다.

var singleNumber = function (nums) {
  // 중복이 안되는거 찾으라고?
};

// reduce()
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

// for..of: 객체에 반복문 돌릴 때
// has(): 주어진 키를 가진 요소가 Map에 존재하는지를 반환합니다.
// set(key, value): Map 객체에서 주어진 키를 가진 요소를 추가하고, 키의 요소가 이미 있다면 대체합니다.
let singleNumber = function (nums) {
  let map = new Map(); // map 객체 생성
  let val = 0;

  for (let x of nums) {
    // 기존에 있던 key(x)가 있다면
    if (map.has(x)) {
      // get(key): key를 넣으면 value값을 가져온다.
      // 중복일 경우
      // key로 x를 넣고, value로는 해당 value값과 1을 더해준다.
      map.set(x, map.get(x) + 1); // set = push랑 비슷하다고 보자.
    } else {
      // 중복 안된 경우 - value값으로 1을 설정해준다.
      map.set(x, 1);
    }
  }
  console.log(map, "map");
  for (let [k, v] of map) {
    if (map.get(k) === 1) {
      val = k;
      break;
    }
  }
  return val;
};

// map객체를 잘 사용해보자. 여러 메소드랑 같이
// key값에 따라 value를 다르게 지정하기도 하고 ㅇㅇ

// follow up
// 공간복잡도가 O(1)이 되는 경우
// 1. 수학을 이용한 방법이다.
// nums에서 중복의 요소를 제거하고 합을 구한 뒤 2를 곱한 값에서
// 원래의 배열인 nums의 합을 빼준다.
// [a,a,b,b,c]라는 배열이 있을 때, 2∗(a+b+c)−(a+a+b+b+c)=c 신기방기..

// 2. 비트를 이용한 방법 << 이건 뭔소리야
// ^(XOR): 양쪽 비트 중 하나 만이 1일 경우, 각 비트는 1로 설정합니다.
// 이진수?
// 기억 안 날 때 아래 블로그 보면 너무나 이해가 잘 됨
// https://velog.io/@seungsang00/JavaScript-%EB%B9%84%ED%8A%B8%EC%97%B0%EC%82%B0%EC%9E%90-XOR#XOR-rule

var singleNumber = function (nums) {
  /*
    // 3. set과 합을 이용하는 방법
    return 2 * Array.from(new Set(nums)).reduce((acc,val) => acc+val) - nums.reduce((acc,val) => acc + val);
    */

  //4. bit를 통한 연산
  // 1 ^ 0 = 1, 1 ^ 1 = 0,

  // 1 ^ 2 = 3
  // 1 ^ 3 = 2
  // 3 ^ 2 = 1

  // 이거 진짜 뭔소린지 모르겠당

  let a = 0;
  for (let i of nums) {
    a ^= i; // a = a^i
  }
  return a;
};
