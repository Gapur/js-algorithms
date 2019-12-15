const PriorityQueue = require('./PriorityQueue');

console.log('start PriorityQueue ------');

const priorityQueue = new PriorityQueue();
priorityQueue.add(10, 1);
priorityQueue.add(5, 2);
priorityQueue.add(100, 0);
priorityQueue.add(200, 0);

console.log(`priorityQueue ${priorityQueue.toString()} peek=${priorityQueue.peek()} poll=${priorityQueue.poll()}`);

// priorityQueue.add(100, 0);
// priorityQueue.add(200, 0);
priorityQueue.changePriority(100, 10);
priorityQueue.changePriority(10, 20);

console.log(`priorityQueue ${priorityQueue.toString()} poll1=${priorityQueue.poll()} poll2=${priorityQueue.poll()} poll3=${priorityQueue.poll()} poll4=${priorityQueue.poll()}`);

priorityQueue.add(100, 0);

console.log(`priorityQueue ${priorityQueue.toString()} hasValue 100=${priorityQueue.hasValue(100)} 21=${priorityQueue.hasValue(21)}`);

console.log('end PriorityQueue ------');

module.exports = () => console.log('PriorityQueue is done');
