const Stack = require('./Stack');

console.log('start Stack ------');

const stack = new Stack();

stack.push(1);
stack.push(2);

console.log(`stack ${stack.toString()} peek ${stack.peek()} isEmpty=${stack.isEmpty()}`);

stack.pop();

console.log(`stack ${stack.toString()} peek ${stack.peek()} isEmpty=${stack.isEmpty()}`);

console.log('end Stack -------');

module.exports = () => console.log('Stack is done');
