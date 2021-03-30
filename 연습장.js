// 가장 오랫동안 사용하지 않은 페이지를 교체하는 기법
// 캐시에 공간이 부족하면 가장 최근에 사용하지 않은 항목을 제거

// 1. Doubly Linked List를 통해 이해하고 구현해라. (완료)

// 2. LRU 알고리즘 구현해라. (아직임)

// 잘 모르겠으니 일단 다른 사람 코드 보고 이해하자
class LRUCache {
  constructor(capacity) {
    this.DLL = new DoublyLinkedList();
    // 객체 생성!!
    this.items = {}; // map 객체?
    this.capacity = capacity;
  }

  // method returns the key's value if the key exists in the cache, else returns -1
  // get() 함수로 호출하면 호출된 노드가 head로 오게 된다!!
  get(key) {
    // speical case: 만약 items객체에 key라는 속성을 가지는 요소가 없다면 -1을 return한다.

    if (!this.items[key]) return -1;

    // 일반적인 경우

    // 현재 value를 담는 변수 value를 지정해준다.
    const value = this.items[key].val;
    // 원래 2가 있던 자리를 지워야 한다. head쪽으로 보내야 하니깐
    this.DLL.remove(this.items[key]);
    // 그니까 이건
    // 1 - 2 - 3 순차호출 하면
    // 3 -> 2 -> 1 이 되는데
    //head<<   >>tail 이다. 참고로
    // get(2): 2번 캐시를 호출하면
    // 2 -> 3 -> 1 이렇게 된다.
    // 2가 head로 간다는 말이야 ㅇㅇ

    // 그래서 밑에서는 unshift로 head쪽에 2를 넣어주는거다.
    this.items[key] = this.DLL.unshift(key, value);
    return value;
  }

  // when capacity is reached, invalidate the LRU item before inserting a new item
  // = 용량이 꽉 차면, LRU를 새 노드를 넣기 전에 LRU를 invalidate 하게 만든다.
  put(key, value) {
    // method sets or inserts the value if the key is not already present
    if (this.items[key]) this.DLL.remove(this.items[key]);

    if (this.DLL.length === this.capacity) {
      const currKey = this.DLL.tail.key;
      // delete 연산자는 객체의 속성을 제거합니다.
      delete this.items[currKey];

      this.DLL.remove(this.DLL.tail);
    }
    this.items[key] = this.DLL.unshift(key, value);
  }
}

// 오 겨우 이해했다!!

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // inserting at head into DLL
  unshift(key, val) {
    const newNode = new Node(key, val);
    // speical case: 아무 요소도 없을 때
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    // 일반적인 경우 unshift()
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  remove(node) {
    // if only 1 node
    if (!node.next && !node.prev) {
      this.head = null;
      this.tail = null;
      // if node is tail node (pop())
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
      // if node is head node (shift())
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
      // 일반적인 경우: if node falls somewhere in between
      // index를 굳이 안 써도 되네..?
    } else {
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }
}

// 여기서 2는 용량이다 (capacity)!!
const myCache = new LRUCache(2);

//         key, value
myCache.put(1, 10);
myCache.put(2, 20);
myCache.put(3, 30);
console.log(myCache.get(2));
console.log(myCache);
