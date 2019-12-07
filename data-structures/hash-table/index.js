const HashTable = require('./HashTable');

console.log('start HashTable ------');

const defaultHashTable = new HashTable();
const biggerHashTable = new HashTable(64);

console.log(`defaultHashTable length ${defaultHashTable.buckets.length}, biggerHashTable length ${biggerHashTable.buckets.length}`);

const hashTable1 = new HashTable();

console.log(`hashTable.hash('a')=${hashTable1.hash('a')} hashTable.hash('b')=${hashTable1.hash('b')} hashTable.hash('abc')=${hashTable1.hash('abc')}`);

const hashTable2 = new HashTable(3);

console.log(`hashTable.hash('a')=${hashTable2.hash('a')} hashTable.hash('c')=${hashTable2.hash('c')}`);

hashTable2.set('c', 'earth');
hashTable2.set('d', 'ocean');

console.log(`hashTable.has('x')=${hashTable2.has('x')} hashTable.has('c')=${hashTable2.has('c')}`);

console.log(`hashtable=${hashTable2.buckets[0].toString((value) => `${value.key}:${value.value}`)}`);

console.log(`hashTable.get('c')=${hashTable2.get('c')} hashTable.delete('c')=${hashTable2.delete('a')}`);

console.log('end HashTable -------');

module.exports = () => console.log('HashTable is done');
