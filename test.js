console.log('faux test!');
console.log('printing env, don\'t try this at home!');
console.log(process.env);
var crypto = require('crypto');
var ciphers = crypto.getCiphers();
console.log(ciphers);
var hashes = crypto.getHashes();
console.log(hashes); 
process.exit(0);
