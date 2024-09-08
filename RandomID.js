const crypto = require('crypto');
console.dir(crypto);
const randomId = crypto.randomBytes(16).toString('hex');
console.log(randomId);
