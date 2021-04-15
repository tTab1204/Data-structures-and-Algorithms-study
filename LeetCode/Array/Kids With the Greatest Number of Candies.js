var kidsWithCandies = function (candies, extraCandies) {
  const sorted = [...candies].sort((a, b) => b - a);

  let answer = [];

  const greatest = sorted[0];

  for (let i = 0; i < candies.length; i++) {
    candies[i] + extraCandies >= greatest
      ? answer.push(true)
      : answer.push(false);
  }
  return answer;
};
// 근데 조금이지만 왜 이게 더 빠르지?

(candies = [2, 3, 5, 1, 3]), (extraCandies = 3);
kidsWithCandies(candies, extraCandies);

// 다른 사람의 풀이
const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
};

// 이렇게 js함수 활용을 더 적극적으로 하도록 노력해야겠다.
