const InterpolationSearch = (sortedArray, seekElement) => {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    const rangeDelta = sortedArray[rightIndex] - sortedArray[leftIndex];
    const indexDelta = rightIndex - leftIndex;
    const valueDelta = seekElement - sortedArray[leftIndex];

    if (valueDelta < 0) {
      return -1;
    }

    if (!rangeDelta) {
      return sortedArray[leftIndex] === seekElement ? leftIndex : -1;
    }

    const middleIndex = leftIndex + Math.floor((valueDelta * indexDelta) / rangeDelta);

    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex;
    }

    if (sortedArray[middleIndex] < seekElement) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
};

module.exports = InterpolationSearch;
