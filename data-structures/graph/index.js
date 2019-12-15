const Graph = require('./Graph');
const GraphEdge = require('./GraphEdge');
const GraphVertex = require('./GraphVertex');

console.log('start Graph ------');

const graph = new Graph();

const vertexA = new GraphVertex('A');
const vertexB = new GraphVertex('B');

graph
  .addVertex(vertexA)
  .addVertex(vertexB);

console.log(`Graph - ${graph.toString()}`);

const edgeAB = new GraphEdge(vertexA, vertexB);

graph.addEdge(edgeAB);

console.log(`Graph edges count ${graph.getAllVertices().length}`);

const graphVertexA = graph.getVertexByKey(vertexA.getKey());

console.log(`Graph neighbors ${graphVertexA.getNeighbors().length}, graph weight ${graph.getWeight()}`);

const startVertex = new GraphVertex('A');
const endVertex = new GraphVertex('B');
const edge = new GraphEdge(startVertex, endVertex);

console.log(`edge=${edge.getKey()} ${edge.toString()} startVertex=${edge.startVertex} endVertex=${edge.endVertex}`);

const edge1 = new GraphEdge(vertexA, vertexB, 10);

console.log(`edge weight=${edge1.weight} startVertex=${edge1.startVertex}`);

console.log('end Graph -------');

module.exports = () => console.log('Graph is done');
