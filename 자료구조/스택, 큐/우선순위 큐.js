class Node {
  constructor(data, number) {
    this.data = data; // value라고 생각
    this.number = number; // 우선순위
  }
}

class PriorityQueue {
  constructor() {
    this.list = [];
  }

  peek() {
    // special case
    if (this.items.length === 0) {
      return "Empty queue";
    }
    return this.list[0].data;
  }
  // 이건 쉬우니까 이해 됐다.

  enqueue(data, number) {
    const newNode = new Node(data, number);
    let addedFlag = false;

    for (let i = 0; i < this.list.length; i++) {
      // 만약 하나라도 newNode가 더 높은 우선순위일 때 (number이 더 낮을수록 우선순위가 높음)
      if (this.list[i].number > newNode.number) {
        this.list.splice(i, 0, newNode);

        addedFlag = true;
        break;
      }
    }
    // addedFlag가 false라면
    if (!addedFlag) this.list.push(newNode);
  }

  dequeue() {
    if (this.list.length === 0) {
      return "return해줄게 없습니다.";
    }
    // 왜 이게 shift()지?
    // 아 어차피 우선순위 큐는 우선순위가 높은 요소가 먼저 나가는 자료구조니까
    // 우선순위가 높은건 제일 앞에 있으니까 당연히 shift()를 하는거다.
    this.list.shift();
  }
}
const queue = new PriorityQueue();
queue.enqueue(3, 4);
queue.enqueue(6, 5);
queue.enqueue(7, 3);
queue.enqueue(8, 1);
console.log(queue);

// 우선순위 큐는 이해했다.

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  var q = new PriorityQueue();

  for (var i = 0; i < stones.length; i++) {
    q.push(stones[i]);
  }

  while (q.queue.length > 1) {
    var stone1 = q.pop();
    var stone2 = q.pop();

    var weight = stone1 - stone2;

    if (weight !== 0) {
      q.push(weight);
    }
  }

  return q.queue.length === 1 ? q.queue[0] : 0;
};
