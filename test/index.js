var require2 = require('../index.js');
var fs = require('fs');

// write a module
fs.writeFileSync('someModule.js','module.exports = exports = 1;');

// require the module
var module = require2('./someModule.js');
console.log( 'old value: ' + module );



// rewrite and reload the module
fs.writeFileSync('someModule.js','module.exports = exports = 2;');
module = require2.reload('./someModule.js');
console.log( 'new value: ' + module );

// delete file
fs.unlink('someModule.js');