const InsertionSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    let currentIndex = i;
    while (
      array[currentIndex - 1] !== undefined
        && array[currentIndex] < array[currentIndex - 1]
    ) {
      const tmp = array[currentIndex - 1];
      array[currentIndex - 1] = array[currentIndex];
      array[currentIndex] = tmp;
      currentIndex -= 1;
    }
  }

  return array;
};

module.exports = InsertionSort;
