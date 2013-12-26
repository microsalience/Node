var fs = require("fs");
fs.readFile('argv.jss', 'utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});