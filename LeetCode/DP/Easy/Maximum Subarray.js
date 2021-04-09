// DP연습을 위한 문제

// Brute Force를 이용하면 O(n^2)의 시간 복잡도가 나온다.
// 근데 O(n)으로 구해야 한다.
// 모르니까 '카데인 알고리즘'<< 이거 이해해보자.
// 이해했다.

var maxSubArray = function (nums) {
  let localMax = nums[0];
  let finalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    if (localMax > finalMax) finalMax = localMax;
  }
  return finalMax;
};

// https://sustainable-dev.tistory.com/23
// 여기 블로그 주인분 덕분에 너무 이해 잘 됐습니다.. 감사합니당

// 다른 사람의 풀이
// 이건 천재인가?
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    // 여기서 nums[i-1] 자체가 localMax를 의미하니까
    // nums[i]가 localMax가 되는거지. 이게 계속 큰 값으로 업데이트 되는거고
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  // 그럼 그렇게 nums[i]의 값들이 다 업데이트 되서 nums배열의 값들이 다 변했겠지?
  // 전개연산자 써서 제일 큰 값 빼주는거다.
  return Math.max(...nums);
};

// 이해되니까 재밌다.
