//undirected Graph

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.nodes = {};
  }

  addVertex(node) {
    this.nodes[node] = [];
    this.numberOfNodes++;
  }

  addEdge(fromNode, toNode) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }

  removeEdge(fromNode, toNode) {
    this.nodes[fromNode].pop(toNode);
    this.nodes[toNode].pop(fromNode);
  }

  removeVertex(node) {
    if (!this.nodes[node]) {
      return null;
    } else {
      if (this.nodes[node].length > 0) {
        // Edge들 지워주기
        for (let edge of this.nodes[node]) {
          this.removeEdge(node, edge);
        }
      }
      // delete 연산자 는 객체의 속성을 제거합니다.
      delete this.nodes[node];
      this.numberOfNodes--;
      return this.nodes;
    }
  }
  showConnections() {
    const allNodes = Object.keys(this.nodes);
    for (let node of allNodes) {
      let nodeConnections = this.nodes[node];
      let connections = "";

      for (let vertex of nodeConnections) {
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

myGraph.removeEdge("6", "5");
myGraph.removeVertex("6");
myGraph.removeVertex("5");

myGraph.showConnections();
