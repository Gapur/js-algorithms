const search = (array, toFind) => {
  const arraySize = array.length;

  if (!arraySize) {
    return -1;
  }

  const jumpSize = Math.floor(Math.sqrt(arraySize));

  // Find the block where the seekElement belong to
  let blockStart = 0;
  let blockEnd = jumpSize;
  while (array[Math.min(blockEnd, arraySize) - 1] < toFind) {
    // Jump to the next block.
    blockStart = blockEnd;
    blockEnd += jumpSize;

    // If our next block is out of array then we couldn't found the element.
    if (blockStart >= arraySize) {
      return -1;
    }
  }

  let currentIndex = blockStart;
  while (currentIndex < Math.min(blockEnd, arraySize)) {
    if (array[currentIndex] === toFind) {
      return currentIndex;
    }

    currentIndex += 1;
  }

  return -1;
};

module.exports = search;
