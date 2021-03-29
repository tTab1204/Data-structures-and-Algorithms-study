// 트리를 이런 식으로 나타내면 배열에 담을 수 있다.
// index: 0 1 2 3 4 5
// value: 1 4 8 5 2 3

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  // peek()
  peek = () => this.heap[0]; // 항상 최상위 노드가 peek 가 된다.

  // insert()
  insert = (key, value) => {
    // 우선순위를 비교하기 위해서 key, value 로 받는다.
    const node = { key, value }; // 객체로 node 를 만들고
    this.heap.push(node); // push 한다.
    this.heapifyUp(); // 배열에 가장 끝에 넣고, 다시 min heap 의 형태를 갖추도록 한다.
  };

  // heapify(): 아래 -> 위(상향식) 체크
  heapifyUp = () => {
    let index = this.heap.length - 1; // 계속해서 변하는 index 값
    const lastInsertedNode = this.heap[index];

    // 루트노드가 되기 전까지
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 부모 노드의 key 값이 마지막에 삽입된 노드의 키 값 보다 크다면
      // 부모의 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    // break 를 만나서 자신의 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
    this.heap[index] = lastInsertedNode;
  };
}
