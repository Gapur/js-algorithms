const longestCommonSubsequence = require('./longestCommonSubsequence');

console.log('start sets -------');

const set1 = 'ACDFG';
const set2 = 'AMDFF';

const lcs = longestCommonSubsequence(set1, set2);

console.log(`Longest Common Subsequence: set1=${set1} set2=${set2} ${lcs}`);

console.log('end sets --------');

module.exports = () => console.log('sets is done');
