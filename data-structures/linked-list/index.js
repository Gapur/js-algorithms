const LinkedList = require('./LinkedList');

console.log('start LinkedList ------');

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);

console.log(`after append linkedList ${linkedList.toString()}`);

linkedList.prepend(2);
linkedList.append(1);
linkedList.prepend(3);

console.log(`after prepend and append linkedList ${linkedList.toString()}`);

const deletedNode = linkedList.delete(3);

console.log(`deletedNode ${deletedNode}`);

linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log(`before deleting ${linkedList.toString()}`);

const deletedNodeTail = linkedList.deleteTail();
const deletedNodeHead = linkedList.deleteHead();

console.log(`deletedNodeTail=${deletedNodeTail} deletedNodeHead=${deletedNodeHead} linkedList=${linkedList.toString()}`);

const node = linkedList.find({ value: 2 });

console.log(`linkedList ${linkedList.toString()} found=${node}`);

linkedList.reverse();

console.log(`reversed linkedList ${linkedList.toString()}`);

console.log('end LinkedList -------');

module.exports = () => console.log('LinkedList is done');
