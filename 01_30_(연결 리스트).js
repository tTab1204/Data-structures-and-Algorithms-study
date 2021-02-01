//------------------------ 연결 리스트 -----------------------//

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    //this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      // prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new Node(value);

    // newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    // this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }
  // 배열로 콘솔에서 쉽게 볼 수 있게 하기 위함.
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    let newNode = new Node(value);
    // check params

    // 리스트의 끝에 추가할 때
    if (index >= this.length) {
      return this.append(value);
    }

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    // newNode.prev = leader;
    newNode.next = follower;
    // follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;

    // 마지막 노드를 지울 때
    if (index === this.length - 1) {
      leader.next = null;
      this.tail = leader;
    } else {
      leader.next = unwantedNode.next;
    }

    this.length--;
    return this.printList();
  }
  reverse() {
    if (this.length <= 1) {
      console.log("nothing to reverse");
    }

    let next = null;
    let current = this.head;
    let prev = null;

    // https://www.youtube.com/watch?v=D7y_hoT_YZI&ab_channel=GeeksforGeeks
    // 그림 보면 겨우 이해할만 함.
    while (current != null) {
      next = current.next;
      current.next = prev; // 포인터 방향 변경
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99); // 2번 index에 99 value를 넣는다.
myLinkedList.insert(20, 88); // 20 > myLinkedList.length, so => myLinkedList.append(88)
myLinkedList.reverse();
myLinkedList.remove(2);
myLinkedList.printList();
// console.log(myLinkedList);

// 연결 리스트 이해 못했으니 내일 다시
