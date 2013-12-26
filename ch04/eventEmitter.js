var events = require("events");

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1, arg2);
});

emitter.on('error', function(e) {
	console.log(e);
});

emitter.emit('someEvent', 'byvoid', 1991);
emitter.emit('someEvent', 'byvoid', 1991);
emitter.emit("error", "Exception!!!!!!!");