// 혼자 못 풀었다..

var numJewelsInStones = function (jewels, stones) {
  const J = new Set(jewels); // set객체 만들기
  console.log(J); // 신기한게 이렇게 하면 알아서 split이 된다..
  // 물론 객체 안에 담기는거긴 하지만

  // J.has(c)의 의미: 'a' 또는 'A'가 있다면 a를 이용해 누산
  return stones.split("").reduce((a, c) => a + J.has(c), 0);
};
// 다시 이해하기 reduce()

jewels = "aA";
stones = "aAAbbbb";

numJewelsInStones(jewels, stones);

// 다른 사람의 풀이
var numJewelsInStones = function (jewels, stones) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (obj[stones[i]]) {
      obj[stones[i]] += 1; // 이것도 누산시켜준거잖아 결국
    } else {
      obj[stones[i]] = 1; // 처음인 것들은 value를 1로 해주고
    }
  }
  {
    1; // a -> count에 1을 더해주고
    2; // A -> count에 2를 더해줘서
    4; // b

    // 최종적으로 3이 나오게 된다.
  }

  for (let i = 0; i < jewels.length; i++) {
    count += obj[jewels[i]] || 0;
    // 위에 쓰인 || 논리연산자는
    // if(!obj[jewels[i]]) count = 0; 이라는 의미이다.
  }
  return count;
};

// 둘 다 이해했다!
