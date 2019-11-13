const search = (array, toFind) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right && toFind >= array[left] && toFind <= array[right]) {
    const delta = (toFind - array[left]) / (array[right] - array[left]);
    const mid = left + Math.floor((right - left) * delta);
    if (array[mid] === toFind) {
      return mid;
    }
    if (array[mid] < toFind) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

module.exports = search;
