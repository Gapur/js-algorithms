const mergeSortedArrays = (leftArray, rightArray) => {
  let sortedArray = [];

  while (leftArray.length && rightArray.length) {
    let minimumElement = null;

    // Find minimum element of two arrays.
    if (leftArray[0] <= rightArray[0]) {
      minimumElement = leftArray.shift();
    } else {
      minimumElement = rightArray.shift();
    }

    sortedArray.push(minimumElement);
  }

  // If one of two array still have elements we need to just concatenate
  // this element to the sorted array since it is already sorted.
  if (leftArray.length) {
    sortedArray = sortedArray.concat(leftArray);
  }

  if (rightArray.length) {
    sortedArray = sortedArray.concat(rightArray);
  }

  return sortedArray;
};

const sort = (originalArray) => {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const middleIndex = Math.floor(originalArray.length / 2);
  const leftArray = originalArray.slice(0, middleIndex);
  const rightArray = originalArray.slice(middleIndex, originalArray.length);

  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  return mergeSortedArrays(leftSortedArray, rightSortedArray);
};

module.exports = sort;
