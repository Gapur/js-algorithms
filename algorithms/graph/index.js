const Graph = require('../../data-structures/graph/Graph');
const GraphVertex = require('../../data-structures/graph/GraphVertex');
const GraphEdge = require('../../data-structures/graph/GraphEdge');
const dijkstra = require('./dijkstra');

console.log('start Graph -------');

console.log('start dijkstra -------');

const vertexA = new GraphVertex('A');
const vertexB = new GraphVertex('B');
const vertexC = new GraphVertex('C');
const vertexD = new GraphVertex('D');
const vertexE = new GraphVertex('E');
const vertexF = new GraphVertex('F');
const vertexG = new GraphVertex('G');
const vertexH = new GraphVertex('H');

const edgeAB = new GraphEdge(vertexA, vertexB, 4);
const edgeAE = new GraphEdge(vertexA, vertexE, 7);
const edgeAC = new GraphEdge(vertexA, vertexC, 3);
const edgeBC = new GraphEdge(vertexB, vertexC, 6);
const edgeBD = new GraphEdge(vertexB, vertexD, 5);
const edgeEC = new GraphEdge(vertexE, vertexC, 8);
const edgeED = new GraphEdge(vertexE, vertexD, 2);
const edgeDC = new GraphEdge(vertexD, vertexC, 11);
const edgeDG = new GraphEdge(vertexD, vertexG, 10);
const edgeDF = new GraphEdge(vertexD, vertexF, 2);
const edgeFG = new GraphEdge(vertexF, vertexG, 3);
const edgeEG = new GraphEdge(vertexE, vertexG, 5);

const graph = new Graph();
graph
  .addVertex(vertexH)
  .addEdge(edgeAB)
  .addEdge(edgeAE)
  .addEdge(edgeAC)
  .addEdge(edgeBC)
  .addEdge(edgeBD)
  .addEdge(edgeEC)
  .addEdge(edgeED)
  .addEdge(edgeDC)
  .addEdge(edgeDG)
  .addEdge(edgeDF)
  .addEdge(edgeFG)
  .addEdge(edgeEG);

const { distances, previousVertices } = dijkstra(graph, vertexA);

console.log(`Graph ${graph.toString()} distances=${Object.keys(distances).map((d) => `${d}=${distances[d]}`)}`);

console.log('end dijkstra --------');

module.exports = () => console.log('Graph is done');
