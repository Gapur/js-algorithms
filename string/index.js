const hammingDistance = require('./hammingDistance');

console.log('start string -------');

const aStr = '132a43v';
const bStr = '13fa4fv';

const distance = hammingDistance(aStr, bStr);

console.log(`HammingDistance=${distance} a=${aStr} b=${bStr}`);

console.log('end string --------');

module.exports = () => console.log('string is done');
