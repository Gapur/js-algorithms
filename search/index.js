const linearSearch = require('./linear');

console.log('start search -------');

const arrayToLinear = [4, 2, 5, 2, 10, 5, 7, 12, 4];

const foundItem = linearSearch(arrayToLinear, 10);

console.log(`Array ${arrayToLinear.join(', ')} index=${foundItem}`);

console.log('end search --------');

module.exports = () => console.log('search is done');
