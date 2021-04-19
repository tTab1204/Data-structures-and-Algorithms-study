const carPooling = (trips, capacity) => {
  // 가장 먼 거리를 구하고
  const lastLocation = trips.reduce((acc, [, , end]) => {
    return Math.max(acc, end);
  }, 0);

  // 거리마다 용량을 넘는지 확인할 배열 생성
  const dp = Array(lastLocation).fill(0);

  // 거리 1마다 총 사람의 수가 capacity를 넘지 않나 확인해야함.
  trips.forEach(([passengers, start, end]) => {
    // console.log('---------------절취선-----------------')
    for (let i = start; i < end; i++) {
      dp[i] += passengers;
    }
  });
  return Math.max(...dp) <= capacity;
};

trips = [
  [3, 2, 7],
  [3, 7, 9],
  [8, 3, 9],
];
capacity = 11;
carPooling(trips, capacity);
