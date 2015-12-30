Reload (and other) functionality to complement require module.


Reload
---
```js
var require2 = require('./index.js');
var fs = require('fs');

// write a module
fs.writeFileSync('someModule.js','module.exports = exports = 1;');

// require the module
var module = require2('./someModule.js');

console.log( 'old value: ' + module );
// old value: 1


// rewrite and reload the module
fs.writeFileSync('someModule.js','module.exports = exports = 2;');
module = require2.reload('./someModule.js');

console.log( 'new value: ' + module );
// new value: 2
```

Other functionalities
---
```js

require2.resolve( module ); 	// same as require.resolve

require2.isLoaded( module ); 
require2.isLoadable( module ); 

// pretty self-explanatory
```
