const search = (array, toFind) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toFind) return i;
  }
  return -1;
};

module.exports = search;
