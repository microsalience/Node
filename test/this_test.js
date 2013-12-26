var object = new Object();
object.name = "loki";
object.say = function() {
	console.log(this.name);
}
object.say();