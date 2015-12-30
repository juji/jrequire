var jrequire = require('../index.js');
var fs = require('fs');

// write a module
fs.writeFileSync('someModule.js','module.exports = exports = 1;');

// require the module
var module = jrequire('./someModule.js');
console.log( 'old value: ' + module );



// rewrite and reload the module
fs.writeFileSync('someModule.js','module.exports = exports = 2;');
module = jrequire.reload('./someModule.js');
console.log( 'new value: ' + module );

// delete file
fs.unlink('someModule.js');