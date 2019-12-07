const Queue = require('./Queue');

console.log('start Queue ------');

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

console.log(`after enqueue queue ${queue.toString()}`);

queue.enqueue({ value: 'test1', key: 'key1' });
queue.enqueue({ value: 'test2', key: 'key2' });

console.log(`after enqueue queue ${queue.toString()}`);

console.log(`after dequeue=${queue.dequeue().value} queue ${queue.toString()}`);

const peek = queue.peek();

console.log(`after peek=${peek} isEmpty=${queue.isEmpty()}`);

console.log('end Queue -------');

module.exports = () => console.log('Queue is done');
