/**
 * Extend missing traversal callbacks with default callbacks.
 */
function initCallbacks(callbacks = {}) {
  // Init empty callbacks object.
  const initiatedCallbacks = {};

  // Empty callback that we will use in case if user didn't provide real callback function.
  const stubCallback = () => {};
  // By default we will allow traversal of every node
  // in case if user didn't provide a callback for that.
  const defaultAllowTraversalCallback = () => true;

  // Copy original callbacks to our initiatedCallbacks object or use default callbacks instead.
  initiatedCallbacks.allowTraversal = callbacks.allowTraversal || defaultAllowTraversalCallback;
  initiatedCallbacks.enterNode = callbacks.enterNode || stubCallback;
  initiatedCallbacks.leaveNode = callbacks.leaveNode || stubCallback;

  // Returned processed list of callbacks.
  return initiatedCallbacks;
}

/**
 * Recursive depth-first-search traversal for binary.
 */
function depthFirstSearchRecursive(node, callbacks) {
  // Call the "enterNode" callback to notify that the node is going to be entered.
  callbacks.enterNode(node);

  // Traverse left branch only if case if traversal of the left node is allowed.
  if (node.left && callbacks.allowTraversal(node, node.left)) {
    depthFirstSearchRecursive(node.left, callbacks);
  }

  // Traverse right branch only if case if traversal of the right node is allowed.
  if (node.right && callbacks.allowTraversal(node, node.right)) {
    depthFirstSearchRecursive(node.right, callbacks);
  }

  // Call the "leaveNode" callback to notify that traversal
  // of the current node and its children is finished.
  callbacks.leaveNode(node);
}

module.exports = function depthFirstSearch(rootNode, callbacks) {
  // In case if user didn't provide some callback we need to replace them with default ones.
  const processedCallbacks = initCallbacks(callbacks);

  // Now, when we have all necessary callbacks we may proceed to recursive traversal.
  depthFirstSearchRecursive(rootNode, processedCallbacks);
};
