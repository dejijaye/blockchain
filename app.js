const Blockchain = require('./blockchain');

const myChain = new Blockchain();

console.log('mining block 1...');
myChain.addBlock('I am the second block');
console.log('mining block 2...');
myChain.addBlock('I am the third block');

myChain.printChain();