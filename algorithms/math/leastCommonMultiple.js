const { euclideanAlgorithm } = require('./euclidean');

const leastCommonMultiple = (a, b) => (((a === 0) || (b === 0))
  ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b));

module.exports = leastCommonMultiple;
