const { euclideanAlgorithm, euclideanAlgorithmRecursive } = require('./euclidean');

console.log('start math -------');

const originalA = 1071;
const originalB = 462;

const gcd1 = euclideanAlgorithm(originalA, originalB);
const gcd2 = euclideanAlgorithmRecursive(originalA, originalB);

console.log(`Euclidean algorithm ${originalA} ${originalB} ea=${gcd1} ear=${gcd2}`);

console.log('end math --------');

module.exports = () => console.log('math is done');
