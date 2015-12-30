var jrequire = function(str){
	return require(str);
};

jrequire.cache = require.cache;

jrequire.resolve = function(str){
	return require.resolve(str);
};

jrequire.isLoaded = function(str){
	var name = this.isLoadable(str);
	return !name ? false : (
		typeof require.cache[name] == 'undefined' ? (
			false
		) : require.cache[name].loaded
	);
};

jrequire.isLoadable = function(str){
	try{ return this.path(str); }
	catch(e){ return false; }
};

jrequire.reload = function(str){
	var name = require.resolve(str);
	// is loaded
	if(typeof require.cache[name] != 'undefined')
		delete require.cache[name];
	return require(str);
};

module.exports = exports = jrequire;