// 혼자 못 풀었다..

var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    let first = stones.shift();
    let second = stones.shift();

    if (first !== second) {
      stones.push(Math.abs(first - second));
    }
  }

  if (stones.length == 0) {
    return 0;
  }

  return stones[0];
};

// 근데 O(n^2)
// 시간복잡도 더 낮게 못하나?

// O(NlogN)
// priority queue 이용방법

// 아직 이해하기가 어렵다..
// 다시 보고 이해해보자 내일 알고리즘 공부할 때

var lastStoneWeight = function (stones) {
  const heap = new MaxHeap(stones);
  while (heap.size() > 1) {
    const max1 = heap.poll();
    const max2 = heap.poll();
    if (max1 > max2) heap.offer(max1 - max2);
  }
  return heap.size() === 1 ? heap.poll() : 0;
};

// 최대힙 ㅇㅇ?
class MaxHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => b - a;
    this.heapify();
  }

  // O(nlog(n)). In fact, O(n)
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // O(1)
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  // O(log(n))
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // O(log(n))
  poll() {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  // O(log(n))
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // O(log(n))
  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  // O(1)
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  // O(1)
  size() {
    return this.data.length;
  }
}
