// 혼자 못 풀었다.

// 다른 사람의 풀이

// 앞서 나왔던 가장 최소값을 기억하고 그 값을 이용해 차를 계산하고,
// 만일, 최소 값보다 작은 값이 나온다면 최소 값을 업데이트 한다.
// 생각은 여기에 미치는데 구현을 못하겠다. 더 연습해보자.
var maxProfit = function (prices) {
  let min = prices[0];
  let max_diff = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      // set start point
      min = prices[i];
    } else {
      let diff = prices[i] - min;

      if (diff > max_diff) {
        max_diff = diff;
      }
    }
  }

  return max_diff;
};

// 다른 사람의 풀이
// 카데인 알고리즘 다시 사용
const maxProfit = () => {
  let localMax = 0;
  let finalMax = 0;

  for (let i = 1; i < prices.length; i++) {
    localMax = Math.max(0, (localMax += prices[i] - prices[i - 1]));
    finalMax = Math.max(localMax, finalMax);
  }
  return finalMax;
};

// 이거 이해가 안된다.
// 이해했다!
// 또 다른 풀이
