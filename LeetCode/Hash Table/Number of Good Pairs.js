// 중복이 되는 요소 찾기
// 나 진짜 해시를 못한다.
// 더 연습해야 되겠다.

var numIdenticalPairs = function (nums) {
  let obj = {};

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    // general case인데
    if (obj[nums[i]]) {
      count += obj[nums[i]]; // 여기서 누산, reduce()와 같다..
      obj[nums[i]] += 1;
    } else obj[nums[i]] = 1;
  }
  console.log(obj);
  return count;
};

//  obj[nums] > 1 요소 중 이 숫자들로 만들 수 있는 경우의 수
// obj[nums[i]] * obj[nums[i]] -1 / 2

nums = [1, 2, 3, 1, 1, 3];

numIdenticalPairs(nums);

// 다른 사람의 풀이
const numIdenticalPairs = (nums) => {
  const map = nums.reduce(
    // m.get(n)했는데 없으면 1로 설정한다는 거다. 뒤에 +1이 초깃값을 1로 설정해준다고 보면 됨.
    // 그게 아니라면 reduce()에 의해서 누산된다.
    (m, n, i) => m.set(n, (m.get(n) || 0) + 1),
    new Map() // 이렇게 초기값으로 new Map()으로 설정할 수도 있네.. 와..
  );

  // map.values(): map 객체 안의 value값을 순회한다.
  // map.key(): 이건 key값을 순회한다.
  // map 객체의 모든 value에 대해 경우의 수 구하기(= n * (n-1) / 2) -> 오 이해했다.
  return [...map.values()].reduce((num, n) => num + (n * (n - 1)) / 2, 0); // 초깃값: 0
};

// 이해했다!
