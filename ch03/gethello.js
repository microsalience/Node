var Hello = require('./hello');
console.log(Hello);
//// wrong-> Hello.setName('BYVoid');;
//// wrong-> Hello.sayHello();
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();
