// 혼자 못 풀었다.

// DP방식의 다른 사람의 풀이
var coinChange = function (coins, amount) {
  var dp = Array(amount + 1).fill(amount + 1);

  if (amount < 0) return -1;
  if (amount === 0) return 0;

  dp[0] = 0;

  // i를 1부터 11까지 반복문을 돌리고
  for (var i = 1; i <= amount; i++) {
    // 2중 for문으로 j를 coins.length만큼 또 반복문 돌리고
    for (var j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};

// 결국 현재의 동전만큼을 뺀 거스름돈에서 현재 동전하나를 추가하여 만드니까 그 전의 거스름돈에 1을 더하면 됩니다.

// 하지만 이미 구해진 거스름돈이 더 적은값을 가지고 있다면 현재의 값을 유지하면 되는 것입니다. 그래서 이런 식이 나오게 됩니다.

dp[j] = MIN(dp[j], dp[j - coin[i]] + 1);

// 진짜 이해를 못하겠다. 오래 생각했는데도 왜 저런 점화식이 나왔는지 모르겠다.
// https://withhamit.tistory.com/333 나중에 다시 읽고 이해하기
