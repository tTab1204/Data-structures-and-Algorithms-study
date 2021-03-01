function solution(bridge_length, weight, truck_weights) {
  // time: 걸린 시간(답)
  let time = 0;
  // queue: 현재 다리 상태
  let queue = [];
  // queueSum: 현재 다리 무게
  let queueSum = 0;

  // queue의 길이는 다리 길이로 하고 다리 하나하나를 0으로 초기화
  for (let i = 0; i < bridge_length; i++) {
    queue.push(0);
  }
  // now_truck : 현재 다리를 지나가는 트럭
  let now_truck = truck_weights.shift();

  // 큐에 트럭을 넣고 다리를 앞으로 한칸씩 땡김
  queue.unshift(now_truck);
  queue.pop();

  // 다리 무게 증가
  queueSum += now_truck;

  // 시간 증가
  time++;

  // 쉬지않고 큐에 트럭을 넣거나 다리를 건너기 때문에
  // queueSum 이 0이 되면 모든 트럭이 지나간 것.
}
