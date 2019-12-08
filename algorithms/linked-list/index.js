const LinkedList = require('../../data-structures/linked-list/LinkedList');
const reverseTraversal = require('./reverseTraversal');

console.log('start linked-list -------');

const linkedList = new LinkedList();
linkedList
  .append(1)
  .append(2)
  .append(3);

const traversedNodeValues = [];
const traversalCallback = (nodeValue) => {
  traversedNodeValues.push(nodeValue);
};

console.log(`LinkedList ${linkedList.toString()}`);

reverseTraversal(linkedList, traversalCallback);

console.log(`Reverse Traversal LinkedList ${traversedNodeValues.toString()}`);

console.log('end linked-list --------');

module.exports = () => console.log('LinkedList is done');
