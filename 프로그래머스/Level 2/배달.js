// 1. 배달 (저번에 못했던거 다시 풀어보자)

// 1. 힙과 우선순위 큐를 구현한 뒤
// 2. 다익스트라 알고리즘을 구현해본다.
// 3. 이후에 문제 풀어보기

// 전역변수
var limit;
var distance = [];
var visited = [];
var result;
function solution(N, road, K) {
  var answer = 0;

  //변수 초기화
  limit = K;
  result = 0;
  visited = new Array(N + 1).fill(false);
  /*10001 * N 인 이유는 간선의 최대값의 최대합 
  즉, 1~N까지 edge가 모두 10000이라면 distance는 10000*N이 될 수 있기 때문입니다*/
  distance = new Array(N + 1).fill(10001 * N);
  distance[1] = 0;

  var pq = [];

  pq.push(1);

  dijkstra(1, road, pq);
  return distance.filter((item) => {
    return item <= limit;
  }).length;
}

function dijkstra(i, road, pq) {
  while (pq.length) {
    //splice는 배열을 return하기 때문에 pop()을 통해 꺼내 주었습니다.
    i = pq.splice(findMin(pq), 1).pop();
    if (visited[i]) continue;
    visited[i] = true;

    // road는 양방향 이기 때문에 item[0]과 item[1] 둘중 하나라도 존재하면 node에 붙은 edge입니다.
    var found = road.filter((item) => {
      return item[0] == i || item[1] == i;
    });
    found.sort((a, b) => a[2] - b[2]);

    for (var item of found) {
      var src = i;
      var dst = item[0] == i ? item[1] : item[0];
      // 기존의 distance와 새로 찾은 distace의 비교 후 갱신
      if (distance[dst] > distance[src] + item[2]) {
        distance[dst] = distance[src] + item[2];
      }
      if (!visited[dst] && pq.indexOf(dst) == -1) {
        pq.push(dst);
      }
    }
  }
}

//이 함수는 arr중 ditance가 최소인 node의 arr index값을 리턴해 주는 함수 입니다.
function findMin(arr) {
  var min = distance[arr[0]];
  var idx = 0;
  for (var i in arr) {
    if (min > distance[arr[i]]) {
      min = distance[arr[i]];
      idx = i;
    }
  }
  return idx;
}

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
