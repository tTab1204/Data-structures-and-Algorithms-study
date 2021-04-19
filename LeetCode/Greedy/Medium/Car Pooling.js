// 혼자 못 풀었다.
const carPooling = (trips, capacity) => {
  let onOffLog = [];

  for (const [passengers, start, end] of trips) {
    // start에서는 passenger가 타고 end에서는 passenger가 내리기 때문
    onOffLog.push([start, passengers], [end, -passengers]);
  }

  onOffLog.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  // console.log(onOffLog);

  let passengerCount = 0;

  // 배열 비구조화 할당: ,(쉼표)를 통해 일부 속성값을 건너뛸 수 있음
  // 그러니까 여기선 시작점, 종점을 건너뛰고 사람 수만 센거다!!
  for (const [, people] of onOffLog) {
    passengerCount += people;
    if (passengerCount > capacity) return false;
  }
  return true;
};
// 고수들은 배열 비구조화 할당을 적극적으로 잘 쓰는 것 같다.
// 잘 쓰면 진짜 편리할듯. 익숙해져야겠다.
// 이해했다!

// 다른 사람의 풀이 (Dynamic Programming)

var carPooling = function (trips, capacity) {
  // 비구조화 할당 >> 진짜 대단한 기능이라 뭐라 말이 안 나온다.
  const lastLocation = trips.reduce((prev, [, , curr]) => {
    // console.log("prev: ", prev);
    // console.log("curr: ", curr);
    return Math.max(prev, curr);
  }, 0);
  // reduce() reduce() reduce()에 익숙해지자 제발 좀..
  // reduce는 진짜 잘 쓰면 좋으니까 reduce에 익숙해지자
  // 배열 비구조화 할당에 익숙해지자 제발..
  // reduce(): acc는 initialValue(여기선 0)과 같다.
  console.log(lastLocation); // end_location중 가장 먼 위치

  const dp = Array(lastLocation).fill(0);

  // forEach안에 배열을 자체를 넣어서 반복을 돌릴 수 있다.
  // 2차원 배열도 돌릴 수 있다 저렇게. 진짜 너무 좋은 것 같다.
  trips.forEach(([passengers, start, end]) => {
    // console.log("--------------절취선---------------");
    for (let i = start; i < end; i++) {
      // console.log("dp: ", dp);
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

// 왜 반복문이 한개밖에 없는 위에 코드가 더 느릴까요??
