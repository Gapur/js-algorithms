const SelectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
};

module.exports = SelectionSort;
