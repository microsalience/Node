function createCar() {
	var car = new Object();
	car.name = 'benz';
	car.type = 'small';
	car.color = 'black';
	car.showColor = function() {
		console.log(this.color);
	}
	return car;
}
var car1 = createCar();
car1.showColor();

var f1 = new createCar();
console.log(f1);// fi是一个对象
/**
 * { name: 'benz', type: 'small', color: 'black', showColor: [Function] }
 */

var f2 = new createCar();
console.log(f2);

console.log(f1 == f2);// false
