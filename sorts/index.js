const bubbleSort = require('./bubble');
const insertionSort = require('./insertion');

const arrayToBuble = [4, 2, 5, 2, 10, 5, 7, 12, 4];

const bubbleSortedArray = bubbleSort(arrayToBuble);

console.log(`Array sorted by bubble-sort: ${bubbleSortedArray.join(', ')}`);

const arrayToInsertion = [9, 12, 1, 24, 3, 5, 1, 4, 3];

const insertionSortedArray = insertionSort(arrayToInsertion);

console.log(`Array sorted by insertion-sort: ${insertionSortedArray.join(', ')}`);

module.exports = () => console.log('sort is done');
