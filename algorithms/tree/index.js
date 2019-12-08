const BinaryTreeNode = require('../../data-structures/tree/BinaryTreeNode');
const breadthFirstSearch = require('./breadthFirstSearch');
const depthFirstSearch = require('./depthFirstSearch');

console.log('start tree -------');

const nodeA = new BinaryTreeNode('A');
const nodeB = new BinaryTreeNode('B');
const nodeC = new BinaryTreeNode('C');
const nodeD = new BinaryTreeNode('D');
const nodeE = new BinaryTreeNode('E');

nodeA.setLeft(nodeB).setRight(nodeC);
nodeB.setLeft(nodeD).setRight(nodeE);

console.log(`tree ${nodeA.toString()}`);

// Traverse tree without callbacks first to check default ones.
breadthFirstSearch(nodeA);

// Traverse tree with callbacks.
breadthFirstSearch(nodeA, {
  enterNode: () => null,
  leaveNode: () => null,
});

console.log('end tree --------');

module.exports = () => console.log('Tree is done');
