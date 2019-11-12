const bubbleSort = require('./bubble');
const insertionSort = require('./insertion');
const selectionSort = require('./selection');
const mergeSort = require('./merge');

const arrayToBuble = [4, 2, 5, 2, 10, 5, 7, 12, 4];

const bubbleSortedArray = bubbleSort(arrayToBuble);

console.log(`Array sorted by bubble-sort: ${bubbleSortedArray.join(', ')}`);

const arrayToInsertion = [9, 12, 1, 24, 3, 5, 1, 4, 3];

const insertionSortedArray = insertionSort(arrayToInsertion);

console.log(`Array sorted by insertion-sort: ${insertionSortedArray.join(', ')}`);

const arrayToSelection = [4, 11, 2, 2, 5, 9, 4, 2, 3];

const selectionSortedArray = selectionSort(arrayToSelection);

console.log(`Array sorted by selection-sort: ${selectionSortedArray.join(', ')}`);


const arrayToMerge = [14, 12, 1, 2, 1, 5, 1, 4, 3];

const mergeSortedArray = mergeSort(arrayToMerge);

console.log(`Array sorted by merge-sort: ${mergeSortedArray.join(', ')}`);

module.exports = () => console.log('sort is done');
