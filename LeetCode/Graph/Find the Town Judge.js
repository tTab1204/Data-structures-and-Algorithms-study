// 이번 기회에 그래프를 이용해 문제를 푸는 것도 공부해보자.
// 혼자 못 풀었다.
var findJudge = function (N, trust) {
  // Initialize array with 1..N
  // N + 1, so count is easier
  const trustCounts = new Array(N + 1).fill(0);
  [0, 0, 0, 0, 0];

  // 판사 =  자기 빼고 모두를 믿지 않는 사람
  // 그니까 이 말은

  // Iterate through N people
  // 이게 배열 비구조화였다?

  // trust = [
  //   [1, 3],
  //   [1, 4],
  //   [2, 3],
  //   [2, 4],
  //   [4, 3],
  // ];

  for (let [i, j] of trust) {
    // If the person trusts somebody, then it does not meet requirement 1
    // = 누군가를 신뢰하면 요구사항 1을 충족하지 못한다.
    trustCounts[i]--;

    // Count the people they trust
    trustCounts[j]++;
  }

  console.log(trustCounts);
  // If N-1 exists, then its the judge since the judge trusts no one except themselves
  // and everyone else trusts the judge, then its N-1
  for (let i = 1; i < trustCounts.length; i++) {
    // N - 1이 trustCounts[i]가 될 때 왜 그 번호가 판사가 되냐면
    // 그 번호는 '본인을 제외한 모든' 번호에게 신뢰받고 있기 때문이다.
    if (N - 1 === trustCounts[i]) {
      return i;
    }
  }

  return -1;
};

// 으어 이해됐다..

trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];
N = 4;
findJudge(N, trust);
