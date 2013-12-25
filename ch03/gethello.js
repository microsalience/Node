var hello = require("./singleobject").Hello;
//var hello = require("./Hello");
var hello_obj = new hello();// 书上勘误
hello_obj.setName("charles");
hello_obj.sayHello();