const MaxHeap = require('./MaxHeap');
const MinHeap = require('./MinHeap');

console.log('start Heap ------');

console.log('start MaxHeap ------');

const maxHeap = new MaxHeap();
maxHeap.add(5);
maxHeap.add(3);
maxHeap.add(10);
maxHeap.add(11);
maxHeap.add(1);

console.log(`MaxHeap ${maxHeap.toString()} isEmpty=${maxHeap.isEmpty()} peek=${maxHeap.peek()}`);

maxHeap.add(2);

console.log(`MaxHeap ${maxHeap.toString()} poll=${maxHeap.poll()} find(3)=${maxHeap.find(3)}`);

maxHeap.add(7);

console.log(`MaxHeap ${maxHeap.toString()} remove=${maxHeap.remove(10)} arr=${maxHeap.toString()}`);

console.log('end MaxHeap ------');

console.log('start MinHeap ------');

const minHeap = new MinHeap();
minHeap.add(5);
minHeap.add(3);
minHeap.add(10);
minHeap.add(11);
minHeap.add(1);

console.log(`MinHeap ${minHeap.toString()} isEmpty=${minHeap.isEmpty()} peek=${minHeap.peek()}`);

minHeap.add(2);

console.log(`MaxHeap ${minHeap.toString()} poll=${minHeap.poll()} find(3)=${minHeap.find(3)}`);

console.log(`MinHeap ${maxHeap.toString()} remove=${maxHeap.remove(10)} arr=${maxHeap.toString()}`);

console.log('end MinHeap ------');

console.log('end Heap -------');

module.exports = () => console.log('Heap is done');
