var hello1 = require("./module");
hello1.setName("shenwei_wang");
hello1.sayHello();

var hello2 = require("./module");
hello2.setName("shensi_wang");
hello1.sayHello();
hello2.sayHello();