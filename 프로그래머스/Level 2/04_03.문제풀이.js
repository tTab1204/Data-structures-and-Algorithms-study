// 1. 배달
class PriorityQueue {
  constructor() {
    this.memory = [];
    this.length = 0;
  }
  push(newItem) {
    this.length++;
    let isAdded = false;
    for (let i = 0; i < this.memory.length; ++i) {
      if (this.memory[i].weight > newItem.weight) {
        this.memory.splice(i, 0, newItem);
        isAdded = true;
        break;
      }
    }
    if (!isAdded) this.memory.push(newItem);
  }
  pop() {
    this.length--;
    return this.memory.shift();
  }
}

function solution(N, road, K) {
  const pq = new PriorityQueue(); // 우선순위 큐
  const adj = Array.from(Array(N + 1), () => new Array()); // 인접 리스트
  const dist = [0, 0]; // 거리를 담는 배열

  // Number.MAX_VALUE: 무한대를 나타냄
  for (let i = 0; i < N - 1; ++i) dist.push(Number.MAX_VALUE);

  road.map((info) => {
    let a = info[0];
    let b = info[1];
    let c = info[2];

    adj[a].push({ to: b, weight: c });
    adj[b].push({ to: a, weight: c });
  });

  pq.push({
    to: 1,
    weight: 0,
  });

  while (pq.length) {
    let edge = pq.pop();

    // 여기까지 이해함

    // --------------이해가 안 되는 부분--------------//
    adj[edge.to].map((next) => {
      if (dist[next.to] > dist[edge.to] + next.weight) {
        dist[next.to] = dist[edge.to] + next.weight;
        pq.push(next);
      }
    });
  }
  // -----------------이해가 안 되는 부분------------//

  let answer = 0;
  for (let i = 1; i < N + 1; ++i) {
    if (dist[i] <= K) answer++;
  }

  return answer;
}
