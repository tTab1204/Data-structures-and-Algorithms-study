var majorityElement = function (nums) {
  let map = new Map();
  let result = 0;
  for (let x of nums) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }
  console.log(map);
  for (let [k, v] of map) {
    if (map.get(k) > Math.floor(nums.length / 2)) {
      result = k;
      break;
    }
  }
  return result;
};

// 분할, 정복으로 풀랬더니 해시로 풀어버렸다..
// follow up: 공간복잡도를 O(1)로 해보라는거 못했다.

// Boyer-Moore Voting Algorithm
// 이거 이해해보기
const majorityElement = (nums) => {
  let count = 0;
  let candidate = null;

  for (let num in nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }
  return candidate;
};

// 매우 짧다. 속도는 별로
const majorityElement = (nums) => {
  nums.sort((a, b) => a - b);
  let index = Math.floor(nums.length / 2);
  return nums[index];
};

// nums = [2, 2, 1, 1, 1, 2, 2];
// majorityElement(nums);
