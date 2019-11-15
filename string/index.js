const hammingDistance = require('./hammingDistance');
const knuthMorrisPratt = require('./knuthMorrisPratt');
const levenshteinDistance = require('./levenshteinDistance');
const longestCommonSubstring = require('./longestCommonSubstring');

console.log('start string -------');

const aStr = '132a43v';
const bStr = '13fa4fv';

const distance = hammingDistance(aStr, bStr);

console.log(`HammingDistance=${distance} a=${aStr} b=${bStr}`);

const text = 'THIS IS A TEST TEXT';
const word = 'TEST';

const kmp = knuthMorrisPratt(text, word);

console.log(`Knuth Morris Pratt word=${word} text=${text} index=${kmp}`);

const strFrom = 'kitten';
const strTo = 'sitting';

const lvnshteinDistance = levenshteinDistance(strFrom, strTo);

console.log(`Levenshtein Distance ${lvnshteinDistance} from=${strFrom} to=${strTo}`);

const string1 = 'ABABC';
const string2 = 'BABCA';

const longestSubstring = longestCommonSubstring(string1, string2);

console.log(`Longest Common Substring ${longestSubstring} string1=${string1} string2=${string2}`);

console.log('end string --------');

module.exports = () => console.log('string is done');
