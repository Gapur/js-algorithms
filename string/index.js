const hammingDistance = require('./hammingDistance');
const knuthMorrisPratt = require('./knuthMorrisPratt');

console.log('start string -------');

const aStr = '132a43v';
const bStr = '13fa4fv';

const distance = hammingDistance(aStr, bStr);

console.log(`HammingDistance=${distance} a=${aStr} b=${bStr}`);

const text = 'THIS IS A TEST TEXT';
const word = 'TEST';

const kmp = knuthMorrisPratt(text, word);

console.log(`Knuth Morris Pratt word=${word} text=${text} index=${kmp}`);

console.log('end string --------');

module.exports = () => console.log('string is done');
