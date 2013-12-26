var baseNum = 10;
function addNum(a, b) {
	return function() {
		return a + b + baseNum;
	}
}
console.log(addNum(1, 2)());// print: 13
