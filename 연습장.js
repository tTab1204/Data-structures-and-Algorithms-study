class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.list = [];
  }

  peek() {
    return this.list[0];
  }

  remove() {
    // special case
    if (!this.list.length || this.list.length === 1) return "이거 비었어요.";
    // general case
    else this.list.shift();
  }

  add(value, priority) {
    const newNode = new Node(value, priority);
    let addedFlag = false;
    // special case
    if (!this.list.length) this.list.push(newNode);
    // general case
    else {
      // 반복문 돌려서
      // 만약 this.list[i]의 우선순위(priority)가 newNode.priority 보다 낮으면(숫자가 높을수록 우선순위는 낮아진다.)
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].priority > newNode.priority) {
          this.list.splice(i, 0, newNode);
          addedFlag = true;
          break;
        }
      }
      if (!addedFlag) this.list.push(newNode);
    }
  }
}
const queue = new PriorityQueue();
queue.add(3, 4);
queue.add(6, 5);
queue.add(7, 3);
queue.add(8, 1);
queue.remove();
console.log(queue.peek()); //prints 7

console.log(queue);
