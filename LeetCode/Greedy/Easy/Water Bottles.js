// 또 혼자 못 풀었다.

// 다른 사람의 풀이 1
var numWaterBottles = function (numBottles, numExchange) {
  let total = numBottles;
  while (numBottles) {
    let drink = Math.floor(numBottles / numExchange);
    if (!drink) break;
    total += drink;
    // 이걸 생각한게 대단한 것 같다.
    numBottles = drink + (numBottles % numExchange);
  }
  return total;
};

// 다른 사람의 풀이 2
