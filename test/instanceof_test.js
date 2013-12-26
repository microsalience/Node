var s = "abc";
var s2 = new String("abc");
console.log(s.length);// 3
console.log(s.substring(0, 1));// a
console.log(s instanceof String);// false
console.log(s2 instanceof String);// true
console.log(typeof s);// string
console.log(typeof s2);// object
