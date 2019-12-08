function reverseTraversalRecursive(node, callback) {
  if (node) {
    reverseTraversalRecursive(node.next, callback);
    callback(node.value);
  }
}

module.exports = function reverseTraversal(linkedList, callback) {
  reverseTraversalRecursive(linkedList.head, callback);
};
