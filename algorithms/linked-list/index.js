const LinkedList = require('../../data-structures/linked-list/LinkedList');
const reverseTraversal = require('./reverseTraversal');
const traversal = require('./traversal');

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

const linkedList1 = new LinkedList();

linkedList1
  .append(1)
  .append(2)
  .append(3);

const traversedNodeValues1 = [];
const traversalCallback1 = (nodeValue) => {
  traversedNodeValues1.push(nodeValue);
};

console.log(`LinkedList1 ${linkedList1.toString()}`);

traversal(linkedList1, traversalCallback1);

console.log(`Traversal LinkedList ${traversedNodeValues1.toString()}`);

console.log('end linked-list --------');

module.exports = () => console.log('LinkedList is done');
