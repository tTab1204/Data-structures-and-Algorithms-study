// Stacks (연결리스트 구현)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // 맨 위를 보게 해주는 함수
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      //  const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();

//--------------------------------------------------------//

// 배열로 구현
class Node {
  constructor(value) {
    this.array = [];
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // 맨 위를 보게 해주는 함수
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();

//-----------------------------------------------------------//

// Queue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.first = null;
    }

    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue("조이");
myQueue.enqueue("사미라");
myQueue.enqueue("비에고");
myQueue.enqueue("피오라");
myQueue.dequeue();

// Stacks 사용하여 Queue 실행하기!!
// https://leetcode.com/problems/implement-queue-using-stacks/description/

// 스택 2개로 큐 만들기
const stack = () => {
  let stackArray = [];
  return {
    push(value) {
      stackArray.push(value);
    },

    pop() {
      return stackArray.pop();
    },

    peek() {
      return stackArray[stackArray.length - 1];
    },

    getLength() {
      return stackArray.length;
    },

    isEmpty() {
      return stackArray.length === 0;
    },
  };
};

// 어렵다, 클래스로 구현하는 방법은 없을까..?
const stack = () => {
  let stackArray = [];
  return {
    push(item) {
      stackArray.push(item);
    },
    pop() {
      return stackArray.pop();
    },
    peek() {
      return stackArray[stackArray.length - 1];
    },
    get length() {
      return stackArray.length;
    },
    isEmpty() {
      return stackArray.length === 0;
    },
  };
};

const queue = () => {
  const inStack = stack();
  const outStack = stack();
  return {
    enqueue(item) {
      if (!outStack.isEmpty()) {
        while (!outStack.isEmpty()) {
          inStack.push(outStack.pop());
        }
      }
      inStack.push(item);
    },
    dequeue() {
      if (!inStack.isEmpty()) {
        while (!inStack.isEmpty()) {
          outStack.push(inStack.pop());
        }
      }
      return outStack.pop();
    },
    peek() {
      if (!inStack.isEmpty()) {
        while (!inStack.isEmpty()) {
          outStack.push(inStack.pop());
        }
      }
      return outStack.peek();
    },
    get length() {
      if (!inStack.isEmpty()) {
        while (!inStack.isEmpty()) {
          outStack.push(inStack.pop());
        }
      }
      return outStack.length;
    },
    isEmpty() {
      return this.length === 0;
    },
  };
};

const q = queue();
console.log(q.isEmpty());
q.enqueue(1);
console.log(q.peek());
q.enqueue(2);
q.enqueue(3);
console.log(q.peek());
q.enqueue(4);
console.log(q.dequeue());
console.log(q.isEmpty());
console.log(q.dequeue());
