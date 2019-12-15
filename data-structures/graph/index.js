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

console.log('end Graph -------');

module.exports = () => console.log('Graph is done');
