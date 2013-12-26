function sayColor(sPrefix, sSuffix) {
	console.log(sPrefix + this.color + sSuffix);
}
var obj = new Object();
obj.color = "red";
sayColor.call(obj, "The color is ", "a very nice color indeed.");
// print: The color is reda very nice color indeed.
