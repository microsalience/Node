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

var f = new createCar();
console.log(f);