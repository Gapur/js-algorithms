const bubbleSort = require('./bubble-sort');

const array = [4, 2, 5, 2, 10, 5, 7, 12, 4];

const bubbleSortedArray = bubbleSort(array);

console.log(`Array sorted by bubble-sort: ${bubbleSortedArray.join(', ')}`);

module.exports = () => console.log('sort is done');
