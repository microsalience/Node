function add(a, b) {
	c = a + b;
	console.log(a + " + " + b + " = " + c);
}

var fun_add_2 = new Function("a", "b",
		"console.log(a + \" + \" + b + \" = \" + (a+b))");

fun_add_2(1, 2);
console.log(fun_add_2.length);
console.log(fun_add_2.toString());