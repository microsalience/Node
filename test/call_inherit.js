// 采用call()的方式继承
function ClassA(sColor) {
	this.color = sColor;
	this.sayColor = function() {
		console.log(this.color);
	};
}

function ClassB(sColor, sName) {
	ClassA.call(this, sColor);
	this.name = sName;
	this.sayName = function() {
		console.log(this.name);
	};
}

var objA = new ClassA("red");
var objB = new ClassB("blue", "123");
objA.sayColor();// print red
objB.sayColor();// print blue
objB.sayName();// print 123
