//有时候我们只是想把一个对象封装到模块中，例如：
function Hello() {
	var name;

	this.setName = function(theName) {
		name = theName;
	};

	this.sayHello = function() {
		console.log("Hello - " + name);
	};

};
module.exports = Hello;
//exports.Hello = Hello;

// 可以用下面方法稍微简化
// 这样就可以直接获得这个对象了：var Hello = require('./hello');

