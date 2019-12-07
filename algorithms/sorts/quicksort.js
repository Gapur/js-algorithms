const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (array, left, right) => {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const sort = (array, left, right) => {
  if (array.length > 1) {
    const index = partition(array, left, right);
    if (left < index - 1) {
      sort(array, left, index - 1);
    }
    if (index < right) {
      sort(array, index, right);
    }
  }
  return array;
};

module.exports = sort;
