const Graph = require('../../data-structures/graph/Graph');
const GraphVertex = require('../../data-structures/graph/GraphVertex');
const GraphEdge = require('../../data-structures/graph/GraphEdge');
const dijkstra = require('./dijkstra');
const prim = require('./prim');
const kruskal = require('./kruskal');
const floydWarshall = require('./floydWarshall');
const topologicalSort = require('./topologicalSort');

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

console.log('start prim -------');

const pVertexA = new GraphVertex('A');
const pVertexB = new GraphVertex('B');
const pVertexC = new GraphVertex('C');
const pVertexD = new GraphVertex('D');

const pEdgeAB = new GraphEdge(pVertexA, pVertexB, 1);
const pEdgeAD = new GraphEdge(pVertexA, pVertexD, 3);
const pEdgeBC = new GraphEdge(pVertexB, pVertexC, 1);
const pEdgeBD = new GraphEdge(pVertexB, pVertexD, 3);
const pEdgeCD = new GraphEdge(pVertexC, pVertexD, 1);

const graphForPrim = new Graph();

graphForPrim
  .addEdge(pEdgeAB)
  .addEdge(pEdgeAD)
  .addEdge(pEdgeBC)
  .addEdge(pEdgeBD)
  .addEdge(pEdgeCD);

const minimumSpanningTree = prim(graphForPrim);

console.log(`graph weigth to be 9 = ${graphForPrim.getWeight()}`);

console.log(`${minimumSpanningTree.getWeight()} to be 3, all verticles length ${minimumSpanningTree.getAllVertices().length}`);

console.log(`graph - ${minimumSpanningTree.toString()}`);

console.log('end prim --------');

console.log('start kruskal --------');

const kVertexA = new GraphVertex('A');
const kVertexB = new GraphVertex('B');
const kVertexC = new GraphVertex('C');
const kVertexD = new GraphVertex('D');
const kVertexE = new GraphVertex('E');
const kVertexF = new GraphVertex('F');
const kVertexG = new GraphVertex('G');

const kEdgeAB = new GraphEdge(kVertexA, kVertexB, 2);
const kEdgeAD = new GraphEdge(kVertexA, kVertexD, 3);
const kEdgeAC = new GraphEdge(kVertexA, kVertexC, 3);
const kEdgeBC = new GraphEdge(kVertexB, kVertexC, 4);
const kEdgeBE = new GraphEdge(kVertexB, kVertexE, 3);
const kEdgeDF = new GraphEdge(kVertexD, kVertexF, 7);
const kEdgeEC = new GraphEdge(kVertexE, kVertexC, 1);
const kEdgeEF = new GraphEdge(kVertexE, kVertexF, 8);
const kEdgeFG = new GraphEdge(kVertexF, kVertexG, 9);
const kEdgeFC = new GraphEdge(kVertexF, kVertexC, 6);

const graphForKruskal = new Graph();

graphForKruskal
  .addEdge(kEdgeAB)
  .addEdge(kEdgeAD)
  .addEdge(kEdgeAC)
  .addEdge(kEdgeBC)
  .addEdge(kEdgeBE)
  .addEdge(kEdgeDF)
  .addEdge(kEdgeEC)
  .addEdge(kEdgeEF)
  .addEdge(kEdgeFC)
  .addEdge(kEdgeFG);

console.log(`graph for kruskal ${graphForKruskal.toString()}, weight=${graphForKruskal.getWeight()} to be = 46`);

const kMinimumSpanningTree = kruskal(graphForKruskal);

console.log(`minimumSpanningTree weight=${kMinimumSpanningTree.getWeight()} to be 24`);

console.log(`kruskal graph = ${kMinimumSpanningTree.toString()} to be = E,C,A,B,D,F,G`);

console.log(`${kMinimumSpanningTree.getAllVertices().length} equal ${graphForKruskal.getAllVertices().length}`);

console.log(`${kMinimumSpanningTree.getAllEdges().length} to be = ${graphForKruskal.getAllVertices().length - 1}`);

console.log('end kruskal --------');

console.log('start floydWarshall');

const fwVertexA = new GraphVertex('A');
const fwVertexB = new GraphVertex('B');
const fwVertexC = new GraphVertex('C');
const fwVertexD = new GraphVertex('D');

const fwEdgeAB = new GraphEdge(fwVertexA, fwVertexB, 3);
const fwEdgeBA = new GraphEdge(fwVertexB, fwVertexA, 8);
const fwEdgeAD = new GraphEdge(fwVertexA, fwVertexD, 7);
const fwEdgeDA = new GraphEdge(fwVertexD, fwVertexA, 2);
const fwEdgeBC = new GraphEdge(fwVertexB, fwVertexC, 2);
const fwEdgeCA = new GraphEdge(fwVertexC, fwVertexA, 5);
const fwEdgeCD = new GraphEdge(fwVertexC, fwVertexD, 1);

const graphForFw = new Graph(true);

// Add vertices first just to have them in desired order.
graphForFw
  .addVertex(fwVertexA)
  .addVertex(fwVertexB)
  .addVertex(fwVertexC)
  .addVertex(fwVertexD);

// Now, when vertices are in correct order let's add edges.
graphForFw
  .addEdge(fwEdgeAB)
  .addEdge(fwEdgeBA)
  .addEdge(fwEdgeAD)
  .addEdge(fwEdgeDA)
  .addEdge(fwEdgeBC)
  .addEdge(fwEdgeCA)
  .addEdge(fwEdgeCD);

const { distances: disFw, nextVertices } = floydWarshall(graphForFw);

const vertices = graphForFw.getAllVertices();

console.log(`vertices ${vertices.toString}`);

console.log(`distances \n ${disFw.map((d) => `- ${d.join(', ')} - \n`).join(' ')}`);

console.log('end floydWarshall --------');

console.log('start topologicalSort');

const tsVertexA = new GraphVertex('A');
const tsVertexB = new GraphVertex('B');
const tsVertexC = new GraphVertex('C');
const tsVertexD = new GraphVertex('D');
const tsVertexE = new GraphVertex('E');
const tsVertexF = new GraphVertex('F');
const tsVertexG = new GraphVertex('G');
const tsVertexH = new GraphVertex('H');

const tsEdgeAC = new GraphEdge(tsVertexA, tsVertexC);
const tsEdgeBC = new GraphEdge(tsVertexB, tsVertexC);
const tsEdgeBD = new GraphEdge(tsVertexB, tsVertexD);
const tsEdgeCE = new GraphEdge(tsVertexC, tsVertexE);
const tsEdgeDF = new GraphEdge(tsVertexD, tsVertexF);
const tsEdgeEF = new GraphEdge(tsVertexE, tsVertexF);
const tsEdgeEH = new GraphEdge(tsVertexE, tsVertexH);
const tsEdgeFG = new GraphEdge(tsVertexF, tsVertexG);

const graphForTS = new Graph(true);

graphForTS
  .addEdge(tsEdgeAC)
  .addEdge(tsEdgeBC)
  .addEdge(tsEdgeBD)
  .addEdge(tsEdgeCE)
  .addEdge(tsEdgeDF)
  .addEdge(tsEdgeEF)
  .addEdge(tsEdgeEH)
  .addEdge(tsEdgeFG);

const sortedVertices = topologicalSort(graphForTS);

console.log(`graph ${graphForTS.toString()} sortedVertices ${sortedVertices.toString()}`);

console.log('end topologicalSort');

module.exports = () => console.log('Graph is done');
