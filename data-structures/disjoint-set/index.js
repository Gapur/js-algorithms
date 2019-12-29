const DisjointSet = require('./DisjointSet');

console.log('start DisjointSet ------');

const disjointSet = new DisjointSet();
disjointSet.makeSet('A');
disjointSet.makeSet('B');
disjointSet.makeSet('C');

console.log(`Disjoint find A = ${disjointSet.find('A')} find F = ${disjointSet.find('F')}`);

disjointSet.union('A', 'B');

console.log(`Find A ${disjointSet.find('A')} find B ${disjointSet.find('B')} A and B same = ${disjointSet.inSameSet('A', 'B')}`);

console.log('end DisjointSet -------');

module.exports = () => console.log('DisjointSet is done');
