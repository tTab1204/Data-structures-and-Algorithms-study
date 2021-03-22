// 1. 다리를 지나는 트럭

const solution = (bridge_length, weight, truck_weights) => {
  // time: 걸린 시간(답)
  let time = 0;
  // bridge: 현재 다리 상태 (큐)
  let bridge = [];
  // bridge_weight: 현재 다리 무게
  let bridge_weight = 0;

  // bridge_length 만큼 반복문을 돌려주는게 중요함!!ㄴ
  for (let i = 0; i < bridge_length; i++) {
    // 먼저 현재 다리 상태를 0(공기)으로 채운 후
    bridge.push(0);
  }
  // now_truck : 현재 다리를 지나가는 트럭
  let now_truck = truck_weights.shift();

  // bridge 큐에 트럭을 넣고 이 배열을 앞으로 한 칸씩 당긴다.
  bridge.unshift(now_truck);
  bridge.pop();

  // 다리 무게 증가
  bridge_weight += now_truck;

  // 시간 증가
  time++;

  while (bridge_weight) {
    // 다리에 있는 트럭이 건넜을 때
    bridge_weight -= bridge.pop();

    // 다리를 아직 안 건넌 트럭 하나 빼두고
    now_truck = truck_weights.shift();

    // 트럭이 다리에 들어갈 수 있는 경우
    if (now_truck + bridge_weight <= weight) {
      bridge.unshift(now_truck);
      bridge_weight += now_truck;
    }

    // 트럭이 다리에 못 들어가는 경우 - 공기를 넣어주고,
    // 아직 다리 못 건넌 트럭배열에 다시 그대로 넣어준다.
    else {
      bridge.unshift(0);
      truck_weights.unshift(now_truck);
    }
    time++;
  }
  return time;
};

// 결론: 또 혼자 못 풀었다. 다시 풀자. 근데 저번 보다는 좀 낫네

// 2. 기능개발

const solution = (progresses, speeds) => {
  // progresses[i] + (speeds[i] * n) >= 100 일 때,
  // n을 howManyDays에 push 하면 된다.

  // 먼저 걸리는 시간을 구해야 한다.

  let howManyDays = [];
  let answer = [];
  for (let i = 0; i < progresses.length; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);

    howManyDays.push(day);
  }

  // HowManyDays가 0보다 클 때까지 루프
  while (HowManyDays.length > 0) {
    // 첫 인자를 하나씩 빼주면서
    let firstItem = HowManyDays.shift();

    // firstItem보다 더 큰 수가 있는지 확인
    let checkBiggerIndex = HowManyDays.findIndex((value) => value > firstItem);

    // 대체 여기서부터 이 로직을 어떻게 생각하고 만드는지 모르겠다.. 코드는 이해 되는데

    // firstItem보다 큰 수가 없다면
    if (checkBiggerIndex === -1) {
      answer.push(HowManyDays.length + 1);
      HowManyDays = [];
    } else {
      // firstItem보다 큰 수가 있다면

      // +1의 이유: shift()로 배열의 길이가 1씩 줄어들기 때문에
      answer.push(checkBiggerIndex + 1);

      // splice()쓰는 이유: [10, 1, 1, 20]이라는 배열이 있다면, 10보다 큰 요소는 20이니까, checkBiggerValue는 shift로 인해 10이 빠지고 [1,1,20]의 배열에서 즉, 2번지에 있게 된다. 그래서 현재의 [1,1,20] 배열에서 [1,1]을 잘라내야 하기 때문에 0번지([1])부터 checkBiggerValue(2)=> 2개를 잘라내야 한다.
      // slice() 안 쓰는 이유: 기존 배열 값을 변경시키기 위해 splice()를 사용한다.
      HowManyDays.splice(0, checkBiggerIndex);
    }
  }
  return answer;
};

// 몇개의 기능이 배포되는지 return을 해야되니까.. 입출력값 진짜 잘 보자!
// 결론: 혼자 못 풀었다. 이건 더 생각 많이 하고 다시 풀어봐야겠다 또.


