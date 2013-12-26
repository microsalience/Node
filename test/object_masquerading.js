// 对象冒充实现继承
function ClassA(sColor) {
	this.color = sColor;
	this.sayColor = function() {
		console.log(this.color);
	};
}

function ClassB(sColor, sName) {
	this.newMethod = ClassA;
	this.newMethod(sColor);
	delete this.newMethod;
	// 所有新属性和新方法都必须在删除了新方法的代码行后定义。否则，可能会覆盖超类的相关属性和方法
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
