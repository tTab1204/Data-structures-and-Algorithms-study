class Graph {
  constructor() {
    // 노드 개수
    this.numberOfNodes = 0;

    // 인접리스트(객체)
    this.adjacentList = {};
  }

  // 노드 추가
  addVertex(node) {
    // 배열로 선언
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  // 간선 추가
  addEdge(fromNode, toNode) {
    // undirected Graph (무방향 그래프)
    // 여기서 node1은 adjacentList객체의 key다.

    // https://taesung1993.tistory.com/35?category=868017 << 이 블로그에 따르면
    // 꼬리(=fromNode), 머리(=toNode)
    this.adjacentList[fromNode].push(toNode);
    this.adjacentList[toNode].push(fromNode);
  }
  showConnections() {
    // allNodes = 정점의 집합 (배열로 반환 -> Object.keys가 배열로 반환함)
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
