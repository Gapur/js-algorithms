const BinaryTreeNode = require('./BinaryTreeNode');

console.log('start BinaryTreeNode ------');

const node = new BinaryTreeNode();

console.log(`node=${node} value=${node.value} left=${node.left} right=${node.right}`);

const leftNode = new BinaryTreeNode(1);
const rightNode = new BinaryTreeNode(3);
const rootNode = new BinaryTreeNode(2);
rootNode
  .setLeft(leftNode)
  .setRight(rightNode);

console.log(`node=${rootNode} value=${rootNode.value} left=${rootNode.left} right=${rootNode.right} left-parent=${rootNode.left.parent.value}`);

console.log(`node=${rootNode.toString()}`);

rootNode.removeChild(rootNode.left);

console.log(`node=${rootNode.toString()}`);

rootNode.setLeft(leftNode);
rootNode.replaceChild(rootNode.right, rootNode.right.right);

console.log('end BinaryTreeNode ------');

module.exports = () => console.log('BinaryTreeNode is done');
