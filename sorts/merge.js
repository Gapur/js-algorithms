const merge = (left, right) => {
  const result = [];
  const leftLen = left.length;
  const rightLen = right.length;
  let l = 0;
  let r = 0;
  while (l < leftLen && r < rightLen) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
};

const sort = (arr) => {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(sort(left), sort(right));
};

module.exports = sort;
