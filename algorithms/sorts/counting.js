const sort = (array, min, max) => {
  const count = [];
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    count[array[i]] += 1;
  }
  let j = 0;
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      array[j] = i;
      j++;
      count[i]--;
    }
  }
  return array;
};

module.exports = sort;
