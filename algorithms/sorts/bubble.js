const Sort = require('./sort');

class BubbleSort extends Sort {
  sort(originalArray) {
    let swapped = false;
    const array = [...originalArray];
    for (let i = 1; i < array.length; i += 1) {
      swapped = false;
      this.callbacks.visitingCallback(array[i]);

      for (let j = 0; j < array.length - i; j += 1) {
        this.callbacks.visitingCallback(array[j]);
        if (this.comparator.lessThan(array[j + 1], array[j])) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }

      if (!swapped) {
        return array;
      }
    }
    return array;
  }
}

module.exports = BubbleSort;
