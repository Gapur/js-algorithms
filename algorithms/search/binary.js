const search = (array, toFind) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
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
