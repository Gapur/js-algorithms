const ShellSort = (array) => {
  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (let i = 0; i < (array.length - gap); i += 1) {
      let currentIndex = i;
      let gapShiftedIndex = i + gap;

      while (currentIndex >= 0) {
        if (array[gapShiftedIndex] < array[currentIndex]) {
          const tmp = array[currentIndex];
          array[currentIndex] = array[gapShiftedIndex];
          array[gapShiftedIndex] = tmp;
        }

        gapShiftedIndex = currentIndex;
        currentIndex -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return array;
};

module.exports = ShellSort;
