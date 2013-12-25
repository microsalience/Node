//var hello = require("./singleobject").Hello;
var hello = require("./singleobject");//需要写成require(jsFileName);书上勘误
var hello_obj = new hello();// 书上勘误
hello_obj.setName("charles");
hello_obj.sayHello();