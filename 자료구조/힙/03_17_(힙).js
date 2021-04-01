// Min Heap
class Heap {
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  // 최근에 삽입한 노드가 제 자리를 찾아갈 수 있도록
  // bottom-up으로 끌어올리는 함수
  heapifyUP() {
    let i = this.heap.length - 1; // 가장 최근에 삽입한 노드의 index를 의미함
    const currentNode = this.heap[i];

    // index가 root node(=0)이 되기 전까지 반복문 돌려주기
    while (i > 0) {
      const parentIndex = this.getParentIndex(i);

      // 부모 노드의 key 값이 마지막에 삽입된 노드의 키 값 보다 크다면
      // 부모의 자리를 계속해서 아래(5->4->3 이런식으로)로 내린다.
      if (this.heap[parentIndex].key > currentNode.key) {
        this.heap[i] = this.heap[parentIndex];
        i = parentIndex;
      } else break;
    }

    // break 를 만나서 자신의 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
    this.heap[i] = currentNode;
  }
  // Top-down
  heapifyDown() {
    let i = 0;
    const len = this.heap.length;
    const rootNode = this.heap[i];

    // 계속해서 left child가 있을 때까지 검사한다.
    while (this.getLeftChildIndex(i) < len) {
      const leftChildIndex = this.getLeftChildIndex(i);
      const rightChildIndex = this.getRightChildIndex(i);

      // 왼쪽, 오른쪽 중에 '더 작은 노드를 찾는다'
      // rightChild가 있다면 'key의 값을 비교'해서 더 작은 값을 찾는다.
      // 없다면 leftChild 가 더 작은 값을 가지는 인덱스가 된다.

      const smallerChildIndex =
        // 꼬리 노드가 전체 길이보다는 작아야 하니까
        rightChildIndex < len &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      // 자식 노드의 키 값이 루트노드보다 작다면 위로 끌어올린다.
      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[i] = this.heap[smallerChildIndex];
        i = smallerChildIndex;
      } else break;
    }

    this.heap[i] = rootNode;
  }

  peek() {
    return this.heap[0];
  }

  // 우선순위를 비교하기 위해서 key, value로 받는다.
  insert(key, value) {
    const node = { key, value }; // node라는 객체를 생성하고
    this.heap.push(node); // push
    this.heapifyUP();
    return this.heap;
  }

  // 1. 최상위 노드를 꺼낸다.
  // 2. 이 때, 배열안에 요소가 2개 이상 남아 있다면, 끝에 있는 노드를 최상위 부모로 만든다.
  // 3. Min Heap 의 형태를 갖추도록 조정한다.
  remove() {
    const len = this.heap.length;
    const rootNode = this.heap[0];

    // special case1
    if (len <= 0) return undefined;
    // special case2
    else if (len === 1) this.heap = [];
    // general case
    else {
      this.heap[0] = this.heap.pop(); // 끝에 있는 노드 부모로 만들기
      this.heapifyDown(); // Top-down 방식으로 위치 조정
    }
    return rootNode;
  }
}

const list = new Heap();

// 4 -> 12 -> 20

list.insert(4);
list.insert(8);
list.insert(5);
list.insert(2);
list.insert(3);
list.insert(6);
list.peek();

// 우선순위 큐
// extends로 상속 Heap class로부터 상속받는다.
class PriorityQueue extends Heap {
  constructor() {
    // 부모 클래스가 가지고 있는 함수를 호출할 때 - java랑 비슷하다
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

// 정확히 이해가 되진 않았다..
// Heap은 다시 공부하자
