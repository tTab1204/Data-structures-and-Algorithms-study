// 양방향으로 리스트 순회 가능

// 노드 생성
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

// 맨 앞에 있는 노드와 맨 뒤에 있는 노드가 서로
// 연결되어 있어 첫 노드에서 마지막 노드를 검색할 때
// 시간복잡도가 O(1)로 찾을수 있다는 장점이 있다.

class DoublyLinkedList {
  constructor(data) {
    this.head = {
      data: data,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  push(data) {
    // create the new node and place the data in it
    const newNode = new Node(data);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this.print();
  }

  pop() {
    // speical case: 만약 this.length가 없다면
    if (!this.length) {
      return null;
    } else {
      let currentNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      // 일반적인 경우
      else {
        // data 먼저 지우고
        this.tail = this.tail.previous;
        // next 포인터 지워주고 (->)
        this.tail.next = null;
        // previous 포인터도 지워준다 (<-)
        currentNode.previous = null;
      }
      this.length--;
      return this.print();
    }
  }

  shift() {
    if (!this.length) {
      return null;
    } else {
      let currentNode = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.previous = null;
        currentNode.next = null;
      }
    }
    this.length--;
    return this.print();
  }

  unshift(data) {
    const newNode = new Node(data);
    if (!this.length) {
      return null;
    } else {
      if (this.length === 1) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
    }
    this.length++;
    return this.print();
  }

  get(index) {
    let currentNode;

    if (!this.length || index >= this.length || index < 0) {
      return null;
    }

    // 일반적인 경우
    else {
      // 1. index가 중앙값보다 작은 경우
      if (index < this.length / 2) {
        let count = 0;
        currentNode = this.head;

        while (count < index) {
          currentNode = currentNode.next;
          count++;
        }
      }
      // 2. index가 중앙값보다 큰 경우
      else {
        let count = this.length - 1;
        currentNode = this.tail;

        while (count > index) {
          currentNode = currentNode.previous;
          count--;
        }
      }
      return currentNode;
    }
  }

  remove(index) {
    // speical case 모두 제거
    if (!this.length || index >= this.length || index < 0) {
      return null;
    }
    // 맨 처음 요소를 지우려는 경우
    else if (index === 0) {
      this.shift();
      return this.print();
    }
    // 마지막 노드를 지우려는 경우
    else if (index === this.length - 1) {
      this.pop();
      return this.print();
    }
    // 일반적인 경우
    else {
      const currentNode = this.get(index);
      const prevNode = currentNode.previous;
      const nextNode = currentNode.next;

      // 양 방향 포인터를 모두 제거한다.
      currentNode.previous = null;
      currentNode.next = null;

      // 포인터를 새롭게 이어준다 1 ->
      prevNode.next = nextNode;

      // 포인터를 새롭게 이어준다 2 <-
      nextNode.previous = prevNode;

      this.length--;
    }
    return this.print();
  }

  print() {
    const array = [];

    // 이 포인터는 조회(traverse)를 위함.
    let currentNode = this.head;

    // 현재 head(=current)가 null이 아니라면
    // current = current.next가 된다.

    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    // 만약 current가 null이 아니라면 data를 return해라
    return array;
  }
}

const list = new DoublyLinkedList(20);

// 4 -> 12 -> 20

list.push(4);
list.push(12);
list.push(20);
list.push(8);
list.push(16);
list.print();

// 와 구현했다!!
// 뿌듯
