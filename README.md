Reload (and other) functionality to complement require module.


Reload
---
```js
var jrequire = require('./index.js');
var fs = require('fs');

// write a module
fs.writeFileSync('someModule.js','module.exports = exports = 1;');

// require the module
var module = jrequire('./someModule.js');

console.log( 'old value: ' + module );
// old value: 1


// rewrite and reload the module
fs.writeFileSync('someModule.js','module.exports = exports = 2;');
module = jrequire.reload('./someModule.js');

console.log( 'new value: ' + module );
// new value: 2
```

Other functionalities
---
```js

jrequire.resolve( module ); 	// same as require.resolve

jrequire.isLoaded( module ); 
jrequire.isLoadable( module ); 

// pretty self-explanatory
```
