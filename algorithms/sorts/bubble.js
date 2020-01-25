const Comparator = require('../../utils/Comparator');

const comparator = new Comparator();

const BubbleSort = (originalArray) => {
  let swapped = false;
  const array = [...originalArray];
  for (let i = 1; i < array.length; i += 1) {
    swapped = false;

    for (let j = 0; j < array.length - i; j += 1) {
      if (comparator.lessThan(array[j + 1], array[j])) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      return array;
    }
  }
  return array;
};

module.exports = BubbleSort;
