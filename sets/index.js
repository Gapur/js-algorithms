const longestCommonSubsequence = require('./longestCommonSubsequence');
const longestIncreasingSubsequence = require('./longestIncreasingSubsequence');

console.log('start sets -------');

const set1 = 'ACDFG';
const set2 = 'AMDFF';

const lcs = longestCommonSubsequence(set1, set2);

console.log(`Longest Common Subsequence: set1=${set1} set2=${set2} ${lcs}`);

const sequence = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];

const lis = longestIncreasingSubsequence(sequence);

console.log(`Longest Increasing Subsequence: ${lis} sequence=${sequence.join(', ')} `)

console.log('end sets --------');

module.exports = () => console.log('sets is done');
