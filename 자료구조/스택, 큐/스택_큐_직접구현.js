// 스택 두개로 큐 만들기!!
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
