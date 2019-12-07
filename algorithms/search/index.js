const linearSearch = require('./linear');
const binarySearch = require('./binary');
const interpolationSearch = require('./interpolation');
const jumpSearch = require('./jump');

console.log('start search -------');

const arrayToLinear = [4, 2, 5, 2, 10, 5, 7, 12, 4];

const linearItem = linearSearch(arrayToLinear, 10);

console.log(`Linear array ${arrayToLinear.join(', ')} toFind=${10} index=${linearItem}`);

const arrayToBinary = [1, 2, 5, 8, 10, 12, 14, 16, 18];

const binaryItem = binarySearch(arrayToBinary, 14);

console.log(`Binary array ${arrayToBinary.join(', ')} toFind=${14} index=${binaryItem}`);

const arrayToInterpolation = [1, 2, 5, 8, 10, 12, 14, 16, 18];

const interpolationItem = interpolationSearch(arrayToInterpolation, 14);

console.log(`Interpolation array ${arrayToInterpolation.join(', ')} toFind=${14} index=${interpolationItem}`);

const arrayToJump = [1, 2, 5, 8, 10, 12, 14, 16, 18];

const jumpItem = jumpSearch(arrayToJump, 5);

console.log(`Jump array ${arrayToJump.join(', ')} toFind=${5} index=${jumpItem}`);

console.log('end search --------');

module.exports = () => console.log('search is done');
