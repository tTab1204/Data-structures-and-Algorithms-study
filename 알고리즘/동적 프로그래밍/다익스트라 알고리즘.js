// 우선순위 큐 먼저 구현 (완료)
// 근데 그래프도 까먹었다.. (다시 구현 ㄱㄱ)
// 그래프를 모르겠어서 이해를 할 수가 없다.
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  peek() {
    // special case
    if (this.items.length === 0) return "Empty Queue";
    // general case
    else this.list[0].data;
  }

  enqueue(value, priority) {
    this.length++;
    const newNode = new Node(value, priority);
    let addedFlag = false;

    for (let i = 0; i < this.list.length; i++) {
      // 만약 newNode가 더 우선순위가 높다면(newNode가 rootNode에 더 가깝다면)
      if (this.list[i].priority > newNode.priority) {
        // newNode를 i번지에 삽입한다.
        this.list.splice(i, 0, newNode);
        addedFlag = true;
        break;
      }
    }
    if (!addedFlag) this.list.push(newNode);
  }

  dequeue() {
    this.length--;
    // special case
    if (this.list.length === 0) return "return해줄게 없습니다.";
    // general case
    else this.list.shift();
  }
}
