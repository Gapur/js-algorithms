const linearSearch = require('./linear');
const binarySearch = require('./binary');
const interpolationSearch = require('./interpolation');

console.log('start search -------');

const arrayToLinear = [4, 2, 5, 2, 10, 5, 7, 12, 4];

const linearItem = linearSearch(arrayToLinear, 10);

console.log(`Array ${arrayToLinear.join(', ')} toFind=${10} index=${linearItem}`);

const arrayToBinary = [1, 2, 5, 8, 10, 12, 14, 16, 18];

const binaryItem = binarySearch(arrayToBinary, 14);

console.log(`Array ${arrayToBinary.join(', ')} toFind=${14} index=${binaryItem}`);

const arrayToInterpolation = [1, 2, 5, 8, 10, 12, 14, 16, 18];

const interpolationItem = interpolationSearch(arrayToInterpolation, 14);

console.log(`Array ${arrayToInterpolation.join(', ')} toFind=${14} index=${interpolationItem}`);

console.log('end search --------');

module.exports = () => console.log('search is done');
