var somepackage = require("./index");
console.log(somepackage);// somepackage可以理解是index模块的exports对象,对象上有hello方法
//{ hello: [Function: f] }
somepackage.hello();