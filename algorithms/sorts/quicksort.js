const QuickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const leftArray = [];
  const rightArray = [];

  const pivotElement = array.shift();
  const centerArray = [pivotElement];

  while (array.length) {
    const currentElement = array.shift();
    if (currentElement === pivotElement) {
      centerArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }

  const leftArraySorted = QuickSort(leftArray);
  const rightArraySorted = QuickSort(rightArray);

  return leftArraySorted.concat(centerArray, rightArraySorted);
};

module.exports = QuickSort;
