const Comparator = require('../../utils/Comparator');

const comparator = new Comparator();

const CountingSort = (originalArray, smallestElement, biggestElement) => {
  let detectedSmallestElement = smallestElement || 0;
  let detectedBiggestElement = biggestElement || 0;

  if (smallestElement === undefined || biggestElement === undefined) {
    originalArray.forEach((element) => {
      if (comparator.greaterThan(element, detectedBiggestElement)) {
        detectedBiggestElement = element;
      }
      if (comparator.lessThan(element, detectedSmallestElement)) {
        detectedSmallestElement = element;
      }
    });
  }

  const buckets = Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0);
  originalArray.forEach((element) => {
    buckets[element - detectedSmallestElement] += 1;
  });

  for (let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex += 1) {
    buckets[bucketIndex] += buckets[bucketIndex - 1];
  }

  buckets.pop();
  buckets.unshift(0);

  const sortedArray = Array(originalArray.length).fill(null);
  for (let elementIndex = 0; elementIndex < originalArray.length; elementIndex += 1) {
    const element = originalArray[elementIndex];
    const elementSortedPosition = buckets[element - detectedSmallestElement];
    sortedArray[elementSortedPosition] = element;
    buckets[element - detectedSmallestElement] += 1;
  }
  return sortedArray;
};

module.exports = CountingSort;
