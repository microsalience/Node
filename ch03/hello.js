function Hello() {
	var name;
	this.setName = function(thyName) {
		name = thyName;
	};
	this.sayHello = function() {
		console.log('Hello ' + name);
	};
};
//exports.f=Hello;
module.exports = Hello;