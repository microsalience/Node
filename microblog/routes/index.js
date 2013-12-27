/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title : 'Express'
	});
};

exports.user = function(req, res) {
	res.send('user!');
};

exports.post = function(req, res) {
	res.send('post!');
};

exports.reg = function(req, res) {
	res.send('reg!');
};

exports.doReg = function(req, res) {
	res.send('doReg!');
};

exports.login = function(req, res) {
	res.send('login!');
};

exports.doLogin = function(req, res) {
	res.send('doLogin!');
};

exports.logout = function(req, res) {
	res.send('logout!');
};

exports.hello = function(req, res) {
	res.send('The time is ' + new Date().toString());
};
