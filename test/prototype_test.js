function Car() {
}

Car.prototype.color = "blue";
Car.prototype.doors = 4;
Car.prototype.mpg = 25;
Car.prototype.drivers = new Array("Mike", "John");
Car.prototype.showColor = function() {
	alert(this.color);
};

var oCar1 = new Car();
var oCar2 = new Car();

oCar1.color="red";
console.log(oCar1.color); // 输出  red
console.log(oCar2.color); // 输出  blue

oCar1.drivers.push("Bill");

console.log(oCar1.drivers); // 输出 "Mike,John,Bill"
console.log(oCar2.drivers); // 输出 "Mike,John,Bill"
