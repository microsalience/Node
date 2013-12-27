
/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
//
var partials = require('express-partials');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 3.x不支持 // 视图静态助手 app.helpers({ inspect : function(obj) { return
 * util.inspect(obj, true); } }); // 视图动态助手 app.dynamicHelpers({ headers :
 * function(req, res) { return req.headers; } });
 */

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/user/:username', routes.user);
app.get('/post', routes.post);
app.get('/reg', routes.reg);
app.post('/reg', routes.doReg);
app.get('/login', routes.login);
app.post('/login', routes.doLogin);
app.get('/logout', routes.logout);
app.get('/hello', routes.hello);
/**
 * app.get('/user/:username', function(req, res) { res.send("username: " +
 * req.params.username); });
 */

app.get('/users', user.list);
app.get('/list', function(req, res) {
			res.render("list", {
						title : 'List',
						items : [1991, 'byvoid', 'express', 'Node.js']
					});
		});
app.get('/help', function(req, res) {
			res.render('help', {
						title : 'Helps'
					});
		});

http.createServer(app).listen(app.get('port'), function() {
			console.log('Express server listening on port ' + app.get('port'));
		});
